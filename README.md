# Deaf Kids Code (DKO)

**About Us:**

Deaf Kids Codes (DKC) aims to allow hard of hearing students to access the same educational resources as their peers. 
This project specifically works on STEM Education. The team came up with the idea to convert Khan Academy videos to 
American Sign Language (ASL). This way, educational content will be widely accessible to hard of hearing students. 
For ASL to be accepted as an official language for Khan Academy, at least 1000 videos need to be converted to ASL. 
This is a monumental task. Currently the Deaf Kids Outreach (DKO) teams aims to build a website to attract people 
who are proficient in ASL to convert the Khan Academy videos and upload it. With time, as the site gains popularity, 
we will reach our 1000 videos target and eventually Khan Academy with list ASL as one of their official languages. 
The project partner for DKO is Shireen Hafeez. She founded DKC with the aim of improving education and employment 
opportunities for children with special needs.

**Local Dev Setup:**

Have Node and NPM installed onto your machines. Incase you can't install the node packages, clean your node cache

    npm cache clean --force

**Commands:**

    Deployment:
        Deployments allow for changes made to go out on the cloud. There are three environment: 
            - Development: Where devs do local development and test features and functionality
            - Staging: Where you stress test the application and simulate high traffic and throughput conditions. Helps to catch bugs and assures quality of the application
            - Production: The main app that is out on the domain
        
        To deploy in Azure, there are three different services running, each with their own urls. 

        NOTE: Check the Azure dashboard for the different environment URLs
        > Development: Pushes and tests all the changes made from local to cloud.
            `$> git remote add dkodev https://dko-development.azurewebsites.net
             $> git push dkodev master`

        > Staging: Pushes the current master to staging
            `$> git remote add dkostaging https://dko-staging.azurewebsites.net
             $> git push dkostaging master`

        > Production: Pushes the finalized and tested master to production
            `$> git remote add dkoprod https://github.com/purdue-epics-dkc/DKO
             $> git push dkoprod master`

 
