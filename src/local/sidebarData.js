import {
  faUsers,
  faIdCardClip,
  faSitemap,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";

export const sidebarData = [
  {
    icon: faBuilding,
    title: "Company",
    children: [
      { title: "Company list", route: "/dashboard/company/list" },
      { title: "Create company", route: "/dashboard/company/create" },
      { title: "Analysis", route: "/dashboard/company/analysis" },
    ],
  },
  {
    icon: faSitemap,
    title: "Department",
    children: [
      { title: "Department list", route: "/dashboard/department/list" },
      { title: "Create department", route: "/dashboard/department/create" },
      { title: "Analysis", route: "/dashboard/department/analysis" },
    ],
  },
  {
    icon: faIdCardClip,
    title: "Position",
    children: [
      { title: "Position list", route: "/dashboard/position/list" },
      { title: "Create position", route: "/dashboard/position/create" },
      { title: "Analysis", route: "/dashboard/position/analysis" },
    ],
  },
  {
    icon: faUsers,
    title: "Employee",
    children: [
      { title: "Employee list", route: "/dashboard/employee/list" },
      { title: "Create employee", route: "/dashboard/employee/create" },
      { title: "Analysis", route: "/dashboard/employee/analysis" },
    ],
  },
];
