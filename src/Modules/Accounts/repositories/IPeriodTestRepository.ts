

interface IPeriodTestDTO {
  stringDate: string;
  idAccount: string;
  username: string;
}

interface IPeriodTestRepository {
  create({stringDate, idAccount, username}: IPeriodTestDTO): void;
  findByIdAccount(idAccount: string): Promise<void>;
  findByUsername(username: string): Promise<void>;
  list();
}

export { IPeriodTestRepository, IPeriodTestDTO };
