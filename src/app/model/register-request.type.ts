import { FormControl } from "@angular/forms"

export type RegisterRequestType = {
	nome: FormControl<string | null>
	email: FormControl<string | null>
	senha: FormControl<string | null>
}