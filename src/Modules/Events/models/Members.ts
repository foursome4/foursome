
class Members {
  idEvent: string;
  idAccount: string;
  username: string;
  role: string;  // Administrator, member
  status: string;  // pending, aproved, recused e banned
  created_at: Date;
}

export { Members };
