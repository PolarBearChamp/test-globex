export interface ShortData {
  name: string
  phone: string
  email: string
}

export interface FullData extends ShortData {
  address: string
  position_name: string
  department: string
  hire_date: string
}
