class ConfirmBox 
{
    message : string ; 
    
    constructor(msg :string){
        this.message = msg;
    }
    public Ask () : boolean 
    {
        return window.confirm(this.message);
    }
}

export default ConfirmBox ;