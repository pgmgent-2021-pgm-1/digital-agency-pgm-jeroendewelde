(() => {
    const app = {
        // Array projects is filled up with objects
        projects : [
            {
                title : 'CROSSMEDIATECHNOLOGIE',
                synopsis : 'De eerstejaars van de afstudeerrichting Grafimediabeleid en de opleiding International Graphic and Digital Media maakten kennis met 3D-technologie en audiovisuele technieken. Dat deden ze in teken van het vak Crossmediatechnologie. Hiervoor gebruikten ze Blender, Adobe Dimension, Mixamo, Aero, Première en Augment. Hun resultaten zie je in deze video.',
                thumbnailURl : 'https://dl.airtable.com/.attachments/68e5c3b84a4cd6e7bce3015eeb862ec3/10fdf0ba/gmt_showcase.JPG',
                assets : [ {
                    title : 'Grafimediabeleid - Crossmediatechnologie',
                    type : 'YouTube - Video',
                    sourceURL : 'https://youtu.be/Tm5rRKtnxtM'
                    }
                ],
                likes : Math.floor(Math.random()*500),
                views : Math.floor(Math.random()*1000)+500,
                dateOfCreation : 1592208000000,
                dateOfModification : 1593417600000,
            },
            {
                title : 'SHARETEVELDE',
                synopsis : 'Hoe kunnen we in tijden van corona aan de hand van een webapplicatie toch',
                thumbnailURl : 'https://dl.airtable.com/.attachments/2e7bdd9a37dc4a4242ecc8e1f35b0ddc/fdd1ad46/Screenshot_2020-05-24ReactApp4.png',
                assets : [ {
                    title : 'Screenshot photoshop collage',
                    type : 'jpg - image',
                    sourceURL : 'https://dl.airtable.com/.attachments/fa66c8d53b164e4af522735232d136de/4631ce0c/Screenshot_2020-05-24ReactApp1.jpg'
                    },
                    {
                    title : 'Screenshot article',
                    type : 'jpg - image',
                    sourceURL : 'https://dl.airtable.com/.attachments/0950324598e5c50f4015979654f20163/f2a25ce0/Screenshot_2020-05-24ReactApp1.png'
                    },
                    {
                    title : 'Screenshot create new post',
                    type : 'jpg - image',
                    sourceURL : 'https://dl.airtable.com/.attachments/9950706ca2ac47e4f7d6594e42325422/bc603b78/Screenshot_2020-05-24ReactApp6.png'
                    }
                ],
                likes : Math.floor(Math.random()*500),
                views : Math.floor(Math.random()*1000)+500,
                dateOfCreation : 1591776000000,
                dateOfModification : 1592985600000,
            }
        ],
        initialize : () => {
            console.log('1. App started!');
        },
        printProjects : () => {
            console.log(app.projects);
        },
        getstringForProjects : () => {
            let output = 
// Start to build output, first one needs to be shown only once
`===========================================================================================
|                                       PORTFOLIO                                         |
==========================================================================================\n`;
            // Loop trough array of projects
            app.projects.forEach((project, i) => {
                output += 
// Add extra line if it is NOT the first element in the Array
// Fill up with the content of selected object
// The function getStringForAssets is called with the array 'assets' from the selected 'project'
`${i > 0 ? '\n' : ''}Project ${i+1}:    ${project.title}
==========================================================================================
Synopsis:           ${project.synopsis}
Thumbnail:          ${project.thumbnailURl}
Likes:              ${project.likes}
Views:              ${project.views}
Created at:         ${app.getDateFromEpoch(project.dateOfCreation)}
Modified at:        ${app.getDateFromEpoch(project.dateOfModification)}
------------------------------------------------------------------------------------------
Assets
------------------------------------------------------------------------------------------
${app.getStringForAssets(project.assets)}
==========================================================================================`;  
            })
            return output;
        },
        // Return epoch-code to readable date
        getDateFromEpoch : (dateCode) => {
            return new Date(dateCode).toISOString();
        },
        // This function is called inside the selected project, array is looped trough and returned in the builed string
        getStringForAssets : (assets) => {
            let tempStr = '';
            assets.forEach((asset, i) => {
                tempStr +=
`${i > 0 ? '\n' : ''}Asset ${i+1}:        ${asset.title} (${asset.type})
                ${asset.sourceURL}`
            })
            return tempStr;
        }
    };
    //app.initialize();
    //function is called, return value is given to output in terminal
    console.log(app.getstringForProjects());
})();
