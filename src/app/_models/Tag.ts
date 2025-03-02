export class Tag{
    static readonly ANGULAR= new Tag('Angular','red');
    static readonly CSHARP= new Tag('c#','green');
    static readonly JAVA= new Tag('Java','pink');
    static readonly KOTLIN= new Tag('Kotlin','orange');
    static readonly ASPNET= new Tag('ASP.NET','brown');
    static readonly FIREBASE= new Tag('Firebase','purple');
    static readonly SQLSERVER= new Tag('SqlServer','red');
    static readonly PYTHON= new Tag('Python','green');
    static readonly C= new Tag('c','darkred');
    static readonly HTML= new Tag('Html','green');
    static readonly CSS= new Tag('Css','blue');
    static readonly TYPESCRIPT= new Tag('TypeScript','darkred');
    
    private constructor(private readonly key:string,public readonly color:string){

    }

    toString(){
        return this.key;
    }
}