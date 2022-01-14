import { Members } from "../models/Members";

interface IMembersGroupDTO {
  id_group: string;
  id_account: string;
  role: string;
  status: string;
}

interface IMembersGroupRepository {
  create({ id_account, id_group, role, status, }: IMembersGroupDTO): void;
  findById(id_account: string): Members;
  list(): Members[];
}

export { IMembersGroupRepository, IMembersGroupDTO };
