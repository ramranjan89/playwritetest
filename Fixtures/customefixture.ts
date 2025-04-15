import {test as basetest} from '@playwright/test';

type CustomFixtures =
{
   login: any;
   fillfrom: any;

}
export const test= basetest.extend<CustomFixtures>(
    {
        login:
        {
            email: "ramranjanjha1994@gmail.com",
            password: "8271554461@rR"
        },
        fillfrom: 
        {
            statuName: "india",
        }
    });


    export  {expect} from '@playwright/test';