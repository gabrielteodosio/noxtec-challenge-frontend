import { FormControl } from "@angular/forms"

export type RegisterFormType = {
	nome: FormControl<string | null>
	email: FormControl<string | null>
	senha: FormControl<string | null>
}