import { PeriodTest } from "../../models/PeriodTest";
import { IPeriodTestRepository, IPeriodTestDTO } from "../IPeriodTestRepository";
import { collections } from '../../../../../services/database.service';
import { v4 as uuidv4 } from "uuid";

class PeriodTestRepository implements IPeriodTestRepository {
  private periodTest: PeriodTest[];

  private static INSTANCE: PeriodTestRepository;
  
  private constructor() {
    this.periodTest = [];
  }

  public static getInstance(): PeriodTestRepository {
    if (!PeriodTestRepository.INSTANCE) {
      PeriodTestRepository.INSTANCE = new PeriodTestRepository();
    }

    return PeriodTestRepository.INSTANCE;
  }

  async findByUsername(username: string): Promise<void> {
    const findusername = await collections.periodTest.findOne({username})
      if(findusername) {
        throw new Error("username already exists!")
      } 
  }
  async findByIdAccount(idAccount: string): Promise<void> {
    const findidAccount = await collections.periodTest.findOne({idAccount})
      if(findidAccount) {
        throw new Error("idAccount already exists!")
      } 
  }

  
    async create({ stringDate, idAccount, username}: IPeriodTestDTO) {
      const periodTest: PeriodTest = new PeriodTest();
      const _id = uuidv4();
      
        Object.assign(periodTest, {
          _id,
          id: _id,
          stringDate,
          idAccount,
          username,
          created_at: new Date(),
        });

        this.periodTest.push(periodTest);
        console.log(periodTest);
        await collections.periodTest.insertOne(periodTest).then((result) =>{ 
        //  console.log(result)
        }).catch(err => {
          console.log(err);
        })
          }

  list(){}

}


export { PeriodTestRepository };

