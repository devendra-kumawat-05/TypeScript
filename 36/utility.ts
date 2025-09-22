interface CollegeType {
  name: string;
  students: number;
  location: string;
  branch?: number;
}

let collegeData6: Omit<CollegeType, "branch" | "location"> = {
  name: "NIT",
  students: 1000,
};

type APIStatus = "loading" | "error" | "success" | "pending";

let ApiCall: Exclude<APIStatus, "pending"> = "success";
ApiCall = "error";

let ApiCall2: Extract<APIStatus, "success" | "error"> = "success";
ApiCall2 = "error";

type RandomType = string | number | boolean | null;

let randomData: NonNullable<RandomType> = "Hello";
randomData = 20;

type SiteRole = "admin" | "user" | "guest";

let userRole: SiteRole = "admin";

let RoleName: Record<SiteRole, string> = {
  admin: "Devendra",
  user: "Aryan",
  guest: "Guest",
};
