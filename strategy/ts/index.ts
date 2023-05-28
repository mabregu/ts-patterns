interface ILogin {
    login(user: string, password: string): boolean;
}

class LoginContext {
    
    private strategy: ILogin;
    
    constructor(strategy: ILogin) {
        this.strategy = strategy;
    }
    
    setStrategy(strategy: ILogin) {
        this.strategy = strategy;
    }
    
    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

class LoginDB implements ILogin {
    
    private users: string[] = [];
    
    login(user: string, password: string): boolean {
        console.log('login with db');
        
        if (user === 'admin' && password === '123456') {
            this.users.push(user);
            return true;
        }
        
        return false;
    }
}

class LoginService implements ILogin {
    
    private users: string[] = [];
    
    login(user: string, password: string): boolean {
        console.log('login with service');
        
        if (user === 'admin' && password === '123456') {
            this.users.push(user);
            return true;
        }
        
        return false;
    }
}

class LoginWithGoogle implements ILogin {
    
    private users: string[] = [];
    
    login(user: string, password: string): boolean {
        console.log('login with google');
        
        if (user.includes('@gmail.com') && password === '123456') {
            this.users.push(user);
            return true;
        }
        
        return false;
    }
}

const loginContext = new LoginContext(new LoginDB());

loginContext.login("admin", "123456");

loginContext.setStrategy(new LoginService());

loginContext.login("admin", "123456");

loginContext.setStrategy(new LoginWithGoogle());

loginContext.login("admin@gmail.com", "123456");