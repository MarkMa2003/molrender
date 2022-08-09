import * as fs from "fs";
import { CifFile } from 'molstar/lib/mol-io/reader/cif';
import {parseCif} from './util';
const cifContent: string = fs.readFileSync("/Users/make/Downloads/101m.cif",'utf-8');
const promise: Promise<CifFile> = parseCif(cifContent);
//atom_site
promise
.then((value:CifFile)=>{
    value.blocks.forEach(b=>{
        for(let i=0;i<b.categories.atom_site.rowCount;i++){
            console.log(b.categories.atom_site.getField('label_atom_id')?.str(i))
            console.log(b.categories.atom_site.getField('Cartn_x')?.str(i))
            console.log(b.categories.atom_site.getField('Cartn_y')?.str(i))
            console.log(b.categories.atom_site.getField('Cartn_z')?.str(i))
            console.log(b.categories.atom_site.getField('label_entity_id')?.str(i))
            console.log(b.categories.atom_site.getField('auth_asym_id')?.str(i))
        }
    })
}).catch((e)=>{
console.error(e);
});
console.log("exit")