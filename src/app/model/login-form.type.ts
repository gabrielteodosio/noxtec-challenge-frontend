import { FormControl } from "@angular/forms";

export type LoginFormType = {
  login: FormControl<string | null>
  password: FormControl<string | null>
};
