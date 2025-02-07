
export interface GradeLevel {
  id: string;
  name: string;
  description?: string;
  school_id?: string;
  created_at?: string;
}

export interface TeacherSubjectClass {
  id: string;
  teacher_id: string;
  subject_id: string;
  class_id: string;
  school_year: string;
  created_at?: string;
  teacher?: Teacher;
  subject?: Subject;
  class?: Class;
}

export interface Invoice {
  id: string;
  student_id: string;
  amount: number;
  description?: string;
  due_date: string;
  status: string;
  created_at?: string;
}

export interface SchoolCalendarEvent {
  id: string;
  title: string;
  description?: string;
  start_date: string;
  end_date: string;
  class_id?: string;
  school_id?: string;
  event_type: string;
  created_at?: string;
}

export interface Teacher {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  school_id?: string;
  created_at?: string;
}

export interface Subject {
  id: string;
  name: string;
  description?: string;
  coefficient: number;
  school_id?: string;
  created_at?: string;
}

export interface Class {
  id: string;
  name: string;
  level: number;
  academic_year: string;
  school_id?: string;
  created_at?: string;
}

export interface Student {
  id: string;
  first_name: string;
  last_name: string;
  gender?: string;
  date_of_birth?: string;
  birth_place?: string;
  status?: string;
  class_id?: string;
  grade_level_id?: string;
  address?: string;
  city?: string;
  postal_code?: string;
  state?: string;
  country?: string;
  phone?: string;
  email?: string;
  emergency_contact_name?: string;
  emergency_contact_phone?: string;
  emergency_contact_email?: string;
  created_at?: string;
}
