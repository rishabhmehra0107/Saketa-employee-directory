export class Employee{
  id:string;
  firstName:string;
  lastName:string;
  email:string;
  jobTitle:string;
  office:string;
  department:string;
  phone:string;
  skype:string;
  preferredName:string;
  constructor(args:any){
    args=!!args?args:{};
    this.id=args.id?args.id:Date.now().toString();
    this.firstName=args.firstName?args.firstName:'';
    this.lastName=args.lastName?args.lastName:'';
    this.email=args.email?args.email:'';
    this.jobTitle=args.jobTitle?args.jobTitle:'';
    this.office=args.office?args.office:'';
    this.department=args.department?args.department:'';
    this.phone=args.phone?args.phone:'';
    this.skype=args.skype?args.skype:'';
    this.preferredName=args.preferredName?args.preferredName:'';
  }
}
