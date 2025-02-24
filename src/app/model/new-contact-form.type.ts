import { FormControl } from "@angular/forms";

export type ContactFormType = {
  nome: FormControl<string | null>
  email: FormControl<string | null>
  celular: FormControl<string | null>
  telefone: FormControl<string | null>
};
