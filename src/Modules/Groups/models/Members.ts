
class Members {
  id_group: string;
  id_account: string;
  avatar: string;
  username: string;
  nickname:string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
  created_at: Date;
}

export { Members };
