import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

    export function validateTopic(guest: string): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } | null => {
            if ((control.value !== null && control.value === '') || control.value ) {
                 return {'validTopic': true};
            }else{
                return null;
            }
        }
    }