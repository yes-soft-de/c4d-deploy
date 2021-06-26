import {FormControl} from '@angular/forms';

export interface SupportInformationRequest {
    id?: number;
    phone?: number;
    phone2?: number;
    whatsapp?: number;
    fax?: number;
    bank?: number;
    stc?: number;
    email: string;
    kilometers: number
    minKilometerBonus: number
    maxKilometerBonus: number
}
