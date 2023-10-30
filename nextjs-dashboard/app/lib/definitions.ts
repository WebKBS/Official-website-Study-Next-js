// 이 파일은 데이터에 대한 유형 정의를 포함합니다.
// 이 파일은 데이터의 형태를 설명하고 각 속성이 허용해야 하는 데이터 유형을 나타냅니다.
// 가르침을 단순화하기 위해 이러한 유형을 수동으로 정의하고 있습니다.
// 그러나 Prisma와 같은 ORM을 사용하는 경우 이러한 유형은 자동으로 생성됩니다.
export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Customer = {
  id: string;
  name: string;
  email: string;
  image_url: string;
};

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // TypeScript에서는 이를 문자열 유니온 유형이라고 합니다.
  // 이것은 "status" 속성이 'pending' 또는 'paid' 두 문자열 중 하나만 가질 수 있음을 의미합니다.
  status: 'pending' | 'paid';
};

export type Revenue = {
  month: string;
  revenue: number;
};

export type LatestInvoice = {
  id: string;
  name: string;
  image_url: string;
  email: string;
  amount: string;
};

// 데이터베이스는 금액에 대해 숫자를 반환하지만 나중에 formatCurrency 함수를 사용하여 문자열로 형식화합니다.
export type LatestInvoiceRaw = Omit<LatestInvoice, 'amount'> & {
  amount: number;
};

export type InvoicesTable = {
  id: string;
  customer_id: string;
  name: string;
  email: string;
  image_url: string;
  date: string;
  amount: number;
  status: 'pending' | 'paid';
};

export type CustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: number;
  total_paid: number;
};

export type FormattedCustomersTable = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  total_invoices: number;
  total_pending: string;
  total_paid: string;
};

export type CustomerField = {
  id: string;
  name: string;
};

export type InvoiceForm = {
  id: string;
  customer_id: string;
  amount: number;
  status: 'pending' | 'paid';
};
