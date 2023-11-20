import select, { Separator } from '@inquirer/select';
import input from '@inquirer/input';
import confirm from '@inquirer/confirm';

const workshop_stack = await select({
    message: 'Selectionner une Stack',
    choices: [
        {
            name: '🌻 Svelte X Tailwind', 
            value: 'svelte_x_tailwind',
            description: 'Un front en svelte avec Tailwind CSS',
        },
        {
            name: '🥀 Svelte X Pocket', 
            value: 'svelte_x_pocket',
            description: 'Un front en svelte avec un back temps reel sous pocketbase',
        },
        {
            name: '🌷 Python X FastAPI',
            value: 'python_x_fastapi',
            description: 'Un back en python avec FastAPI',
        },
        {
            name: '🌸 Gradio',
            value: 'python_x_fastapi',
            description: 'Fast AI testing with Gradio',
        },
        {
            name: '🌹 Wordpress',
            value: 'wordpress',
            description: 'developpement de theme wordpress',
        },
        {
            name: '🌺 openFrameworks',
            value: 'openframeworks',
            description: 'developpement application openFrameworks',
        },
        {
            name: '🌼 Custom',
            value: 'custom',
            description: 'juste les briques de base',
        },
    ],
  });



const path = await input({ message: "Entre le chemin vers l'application :" });
const name = await input({ message: "Entre le nom de l'application :" });
const description = await input({ message: "Entre la description de l'application :" });
const author = await input({ message: "Entre le nom de l'auteur :" });
const answer = await confirm({ message: 'Continue?' });




