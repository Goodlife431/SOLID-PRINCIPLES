export class DatabaseService {
    private static databaseService: DatabaseService

    private constructor(){
        console.log('Database service initialization');

    }

    static getInstance(): DatabaseService {
        if(!this.databaseService){
            this.databaseService = new DatabaseService();
        }

        return this.databaseService;
    }

    query(sql: string): void{
        console.log(`Running SQL: ${sql}`)
    }
}