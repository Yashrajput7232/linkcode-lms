import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, AbstractControl ,FormControl, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent  implements OnInit{
   array=[];
  ansarray=[{"option":"string","isselecetd":"string"}]
  id:any;
  type:any
  items!:FormArray;
   optionarray:any=[]
j=0
answers:any = []
submitted=false
answerlist:any=[]

constructor(private fb:FormBuilder,private examservice:ExamService,private activatedroute:ActivatedRoute,
  private router:Router){}

  ngOnInit(): void {
    this.id=this.activatedroute.snapshot.paramMap.get("id")
    this.type=this.activatedroute.snapshot.paramMap.get("Examtype")
   }

   question:any

  reactform=this.fb.group({
    question:['',Validators.required],
    options:this.fb.array([]),
    Marks:['',Validators.required]
  })

  get addOptionRow(){
    return this.reactform.get("options") as FormArray;
  }

  generaterow(){

    return new FormGroup({
        optionvalue:new FormControl('',Validators.required)
    });
  }

  addnewrow(event: any){
    this.items=this.reactform.get("options") as FormArray;
     this.items.push(this.generaterow())
     this.array=this.reactform.get("options")?.value;
     if(this.array.length<=1)
    {
      (<HTMLInputElement> document.getElementById("addAns")).disabled = true
    }else{
      (<HTMLInputElement> document.getElementById("addAns")).disabled = false
    }
  }



  addanswer(){
    this.array=this.reactform.get("options")?.value;
    this.answers=[]
    for(let i=this.j;i<this.array.length;i++)
    {
        this.answers.push({"answer":this.array[i]['optionvalue'],"status":false})
    }
  }

onChange(option:string, isselecetd:any) {

  if(isselecetd) {
    (<HTMLInputElement> document.getElementById("submit")).disabled = false

    for(let i=0;i<this.answers.length;i++)
    {
      if(this.answers[i].answer===option)
      {
        this.answers[i].status=true
        break;
      }
    }

  }
  else {
    // (<HTMLInputElement> document.getElementById("submit")).disabled = true
    for(let i=0;i<this.answers.length;i++)
    {
      if(this.answers[i].answer===option)
      {
        this.answers[i].status=false
        break;
      }
    }
  }
}

Removeitem(i:any){
    (this.reactform.get('options') as FormArray).removeAt(i);
}


procedsave(){

  this.optionarray=[]
  this.answerlist=[]
  this.submitted=true

  if(this.reactform.invalid ){
    return
  }
  for(let i=0;i<this.answers.length;i++)
  {
     if(this.answers[i]['status']===true)
     {
        this.optionarray.push(this.answers[i]['answer'])
     }
  }

  for(let i=0;i<this.answers.length;i++)
  {
        this.answerlist.push(this.answers[i]['answer'])
  }

  if(this.optionarray.length <=1  && this.answerlist.length<2)
  {
    alert("at least 2 options required and 1 answer required");
    // template:  `<button ejs-button [disabled]="true">Disabled</button>`

    return
  }else{
    (<HTMLInputElement> document.getElementById("submit")).disabled = false
  }

  const { question,Marks} = this.reactform.value;
  this.examservice.addquestion(question,this.answerlist,this.optionarray,parseInt(Marks),this.id).subscribe(
    {

      next: (data) => {

      },
      error: (err) => {
        console.log("error")
      }
    }
  );

  this.reactform.reset();
  this.addanswer()
 } 
 addVerbalquestion(){
  console.log(this.question," " ,this.id)
  this.examservice.addverbalquestion(this.question,this.id).subscribe({
    next: (data) => {
       alert("question succesfully added")
    },
    error: (err) => {
      console.log("error")
    }
  })
}



  gotoexamdetail(){
    this.router.navigate([`/dashboard/exam/${this.id}/${this.type}`,]);
  }

}
