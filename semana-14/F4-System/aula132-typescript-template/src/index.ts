import {JSONFileManager} from "./JSONFileManager";
import { WebFSClassroom, MobileClassroom } from './classroom';
import { Teacher } from './teachers';
import { Student } from './students';
import * as moment from "moment";

const studentsFileManager = new JSONFileManager("students.json");
const students: Student[] = [];
const teachers: Teacher[] = [];

