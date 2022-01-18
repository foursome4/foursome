class Accounts {
  nickname: string;
  username: string;
  role: string;
  status: string;
  type: string;
  email: string;
  phone: string;
  password: Promise<void>;
  avatar: string;
  cover: string;
  relationship: string;
  city: string;
  uf: string;
  lookingFor: string;

  created_at: Date;
}

export { Accounts };
