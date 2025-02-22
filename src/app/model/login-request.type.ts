import { FormControl } from "@angular/forms";

export type LoginRequestType = {
  login: FormControl<string | null>
  password: FormControl<string | null>
};
