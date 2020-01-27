import * as fs from 'fs'

interface FileManager {
    saveToFile(value: any): void
    getContent(): any
}

class JSONFileManager implements FileManager {
    fileName: string
    constructor(fileName: string) {
        this.fileName = `${fileName}.json`
    }

    saveToFile(objectToSave: object) {
        fs.writeFileSync(this.fileName, JSON.stringify(objectToSave, null, 2))
    }

    getContent() {
        return JSON.parse(fs.readFileSync(this.fileName).toString())
    }
}

class TxtFileManager implements FileManager {
    fileName: string
    constructor(fileName: string) {
        this.fileName = `${fileName}.txt`
    }

    getContent(): string {
        return fs.readFileSync(this.fileName).toString()
    }

    saveToFile(value: string): void {
        fs.writeFileSync(this.fileName, value)
    }
}

class FileSystem {
    constructor(private files: FileManager[]) {}

    readFiles() {
        const fileContents = this.files.map(file => file.getContent())

        fileContents.forEach(content => console.log(content))
    }
}

const txtFile = new TxtFileManager('arquivo')

const jsonFile = new JSONFileManager('arquivo')

const fileSystem = new FileSystem([txtFile, jsonFile])

fileSystem.readFiles()