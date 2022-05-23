import { Equipment } from "./equipment";
import { Magic } from "./magic";

export interface Character {
    id:number;
    name: string;
    race: number;
    raceName: string;
    charClass: number;
    className: string;
    equipments: Equipment[];
    magics: Magic[]; 
    level: number;
    alignment:string;
    hitPoints: number;
    experiencePoints: number;
    iniciative: number;
    speed: number;
    armorClass: number;
    inspiration: number;
    passiveWisdom: number;

    //attributes
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;

    //modifiers
    strengthModifier: number;
    dexterityModifier: number;
    constitutionModifier: number;
    intelligenceModifier: number;
    wisdomModifier: number;
    charismaModifier: number;

    //saving throws
    STStrenght: boolean;
    STCharisma: boolean;
    STDexterity: boolean;
    STConstitution: boolean;
    STIntelligence: boolean;
    STWisdom: boolean;

    //skils
    acrobatics: boolean;
    animalHandling: boolean;
    arcana: boolean;
    athletics: boolean;
    deception: boolean;
    history: boolean;
    insight: boolean;
    intimidation: boolean;
    investigation: boolean;
    medicine: boolean;
    nature: boolean;
    perception: boolean;
    performance: boolean;
    persuasion: boolean;
    religion: boolean;
    sleightOfHand: boolean;
    stealth: boolean;
    survival: boolean;
    
}