import { Members } from "../models/Members";

interface IMembersGroupDTO {
  username: string;
  id_user: string;
  role: string;
  status: string;
  id_group: string;
}

interface IMembersGroupRepository {
  create({ id_user, id_group, role, status, username }: IMembersGroupDTO): void;
  findByName(name: string): Members;
  list(): Members[];
}

export { IMembersGroupRepository, IMembersGroupDTO };
