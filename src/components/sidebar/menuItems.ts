
import { Home, School, User, Users, BookOpen, GraduationCap } from "lucide-react";
import { MenuItem } from "./types";

export const getMenuItems = (studentId: string | null): MenuItem[] => [
  {
    title: "Accueil",
    icon: Home,
    path: "/",
  },
  {
    title: "Gérer l'école",
    icon: School,
    path: "/manage-school",
    subItems: [
      {
        title: "Profil",
        path: "/school/profile",
      },
      {
        title: "Calendrier",
        path: "/school/calendar",
      },
      {
        title: "Classes",
        path: "/school/grades-classes",
      },
      {
        title: "Matières",
        path: "/school/subjects",
      },
      {
        title: "Cycles et Trimestres",
        path: "/school/cycles-terms",
      },
      {
        title: "Présence",
        path: "/school/attendance",
      },
    ],
  },
  {
    title: "Gérer l'élève",
    icon: User,
    path: "/manage-student",
    subItems: [
      {
        title: "Profil",
        path: studentId ? `/student/${studentId}/profile` : "/manage-student",
      },
      {
        title: "Académique",
        path: studentId ? `/student/${studentId}/academic` : "/manage-student",
      },
      {
        title: "Progrès",
        path: studentId ? `/student/${studentId}/progress` : "/manage-student",
      },
      {
        title: "Présence",
        path: studentId ? `/student/${studentId}/attendance` : "/manage-student",
      },
      {
        title: "Mérites",
        path: studentId ? `/student/${studentId}/merits` : "/manage-student",
      },
      {
        title: "Programme",
        path: studentId ? `/student/${studentId}/program` : "/manage-student",
      },
      {
        title: "École",
        path: studentId ? `/student/${studentId}/school` : "/manage-student",
      },
      {
        title: "Activités",
        path: studentId ? `/student/${studentId}/activities` : "/manage-student",
      },
      {
        title: "Mentor",
        path: studentId ? `/student/${studentId}/mentor` : "/manage-student",
      },
      {
        title: "Détentions",
        path: studentId ? `/student/${studentId}/detentions` : "/manage-student",
      },
    ],
  },
  {
    title: "Gérer le personnel",
    icon: Users,
    path: "/manage-staff",
    subItems: [
      {
        title: "Liste du personnel",
        path: "/manage-staff",
      },
      {
        title: "Ajouter un membre",
        path: "/manage-staff/add",
      },
      {
        title: "Planification",
        path: "/manage-staff/planning",
      },
    ],
  },
  {
    title: "Formation en ligne",
    icon: BookOpen,
    path: "/online-training",
    subItems: [
      {
        title: "Cours disponibles",
        path: "/online-training",
      },
      {
        title: "Mes formations",
        path: "/online-training/my-courses",
      },
      {
        title: "Certificats",
        path: "/online-training/certificates",
      },
    ],
  },
  {
    title: "Programme d'études",
    icon: GraduationCap,
    path: "/manage-curriculum",
    subItems: [
      {
        title: "Vue d'ensemble",
        path: "/manage-curriculum",
      },
      {
        title: "Programmes",
        path: "/manage-curriculum/programs",
      },
      {
        title: "Évaluations",
        path: "/manage-curriculum/assessments",
      },
    ],
  },
  {
    title: "Portails parents",
    icon: Users,
    path: "/parent-portal",
    subItems: [
      {
        title: "Accès parents",
        path: "/parent-portal",
      },
      {
        title: "Communications",
        path: "/parent-portal/communications",
      },
      {
        title: "Rendez-vous",
        path: "/parent-portal/appointments",
      },
    ],
  },
];
