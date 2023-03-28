import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  // addverbalquestion(question: any, id: any) {
  //   throw new Error('Method not implemented.');
  // }

  public addverbalquestion(name:String,examId:any)
  {
    return this.http.post(`${environment.api}/verbal_question/`,{name,examId});
  }

  constructor(private http:HttpClient) { }
  public addExam(name:string,type:string,startDate:string,courseId:String){
    return this.http.post(`${environment.api}/exam/`,{name,type,startDate,courseId});
}

  public getExam(){
    return this.http.get(`${environment.api}/exam/`);
}

  public getUser(){
    return this.http.get(`${environment.api}/user/`);
  }

  public getCourse(){
    return this.http.get(`${environment.api}/course/`);
  }

public getcourseDropDownValue()
{
  return this.http.get(`${environment.api}/course/`);
}

  public addquestion(name:string,options:Array<String>,answers:Array<String>,mark:any,examId:string)
  {
    return this.http.post(`${environment.api}/question/`,{name,options,answers,mark,examId});
  }

  public getMCQQuestions(examId:any)
  {
    return this.http.get(`${environment.api}/question/exam/${examId}`);
  }

  public getCODINGQuestions(examId:any)
  {
    console.log(examId)
    return this.http.get(`${environment.api}/compiler/exam/${examId}`);
  }
  public getVERBALQuestions(examId:any)
  {
    console.log(examId)
    return this.http.get(`${environment.api}/verbal_question/exam/${examId}`);
  }



  public getResult(sid:any,eid:any){
    return this.http.get(`${environment.api}/attempt/${sid}/${eid}`);
  }

  public getQuestionsforStudent(examId:any)
  {
    return this.http.get(`${environment.api}/question/exam/${examId}/student`);
  }

  public postanswer(examId:any,questionId:any,studId:any,answersSelected:Array<String>){
    return this.http.post(`${environment.api}/attempt/`,{questionId,examId,studId,answersSelected});
  }

 public deleteQuestion(examId:any,questionId:any){
  return this.http.delete(`${environment.api}/question/${examId}/${questionId}`,);
 }

 public addcode(script:any,language:any){
  return this.http.post(`${environment.api}/compiler/`,{script,language});
 }

 addcodingquestion(question:any,description:any,editable:any,nonEditable:any,marks:any,numberOfTestCases:any,examId:any){
  return  this.http.post(`${environment.api}/compiler/add/`,{question,description,editable,nonEditable,marks,numberOfTestCases,examId});

 }

 getCODINGquestionbyid(id:any){
  return this.http.get(`${environment.api}/compiler/${id}`);
 }
}
