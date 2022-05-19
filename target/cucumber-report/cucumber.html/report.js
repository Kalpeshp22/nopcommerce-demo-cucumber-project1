$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Tab",
  "description": "As user I want to Computer tab into nop commerce website",
  "id": "computer-tab",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5609971900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "verify User Should Navigate To Computer Page Successfully",
  "description": "",
  "id": "computer-tab;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User should Verify Computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 91082300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerPageSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 538421000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.userShouldVerifyComputerText()"
});
formatter.result({
  "duration": 39931500,
  "status": "passed"
});
formatter.after({
  "duration": 765192700,
  "status": "passed"
});
formatter.before({
  "duration": 3190440200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "computer-tab;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@sanity"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should Verify Desktops text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerPageSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 610335200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerPageSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 463280700,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.userShouldVerifyDesktopsText()"
});
formatter.result({
  "duration": 46446700,
  "status": "passed"
});
formatter.after({
  "duration": 700075200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 18,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@sanity"
    },
    {
      "line": 17,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 32,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 33,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 34,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "VistaHome [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 35,
      "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3049628800,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@regression"
    },
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerPageSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 574455100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerPageSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 452340300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerPageSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 906004700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 62391500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 83570100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 63388100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 60737400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 69478300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 49275500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 826799400,
  "status": "passed"
});
formatter.after({
  "duration": 708665200,
  "status": "passed"
});
formatter.before({
  "duration": 2767074800,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@regression"
    },
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerPageSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 635339000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerPageSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 534650900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerPageSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 857415800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 51445400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 94501700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 96833000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 71425300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 79470400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 54287800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 841083700,
  "status": "passed"
});
formatter.after({
  "duration": 782641700,
  "status": "passed"
});
formatter.before({
  "duration": 2249248600,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should Build Own Computer And Add Them To Cart Successfully",
  "description": "",
  "id": "computer-tab;verify-that-user-should-build-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 17,
      "name": "@smoke"
    },
    {
      "line": 17,
      "name": "@regression"
    },
    {
      "line": 17,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I click Computer tab \"Computer\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I click on Desktops \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I Click on product name Build your own computer \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I Select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I Select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I Select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I Select OS \"VistaHome [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I Select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I Click on ADD TO CART Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should Verify message The product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 22
    }
  ],
  "location": "ComputerPageSteps.iClickComputerTab(String)"
});
formatter.result({
  "duration": 589742000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 21
    }
  ],
  "location": "ComputerPageSteps.iClickOnDesktops(String)"
});
formatter.result({
  "duration": 561367700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 49
    }
  ],
  "location": "ComputerPageSteps.iClickOnProductNameBuildYourOwnComputer(String)"
});
formatter.result({
  "duration": 854652400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 51938400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectRAM(String)"
});
formatter.result({
  "duration": 90743900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageSteps.iSelectHDD(String)"
});
formatter.result({
  "duration": 111874100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VistaHome [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 71370500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 89783000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnADDTOCARTButton()"
});
formatter.result({
  "duration": 80401000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iShouldVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 886416100,
  "status": "passed"
});
formatter.after({
  "duration": 729902600,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2150032500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 544968200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPageSuccessfully()"
});
formatter.result({
  "duration": 43964800,
  "status": "passed"
});
formatter.after({
  "duration": 777017000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify the error message \"\u003cerrormessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "errormessage"
      ],
      "line": 19,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "diapatel83@gamil.com",
        "dia1123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 20,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "diapatel82@gmail.com",
        "dia1145",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 21,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "diapatel80@gmail.com",
        "",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 22,
      "id": "login-test;verify-the-error-message-with-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3064659800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"diapatel83@gamil.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"dia1123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 559450300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diapatel83@gamil.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 129234700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia1123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 120046900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 466159400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 70340600,
  "status": "passed"
});
formatter.after({
  "duration": 746492300,
  "status": "passed"
});
formatter.before({
  "duration": 2170118800,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"diapatel82@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"dia1145\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 31500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 542827100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diapatel82@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 135959900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia1145",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 118441100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 461878400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 61442700,
  "status": "passed"
});
formatter.after({
  "duration": 794395800,
  "status": "passed"
});
formatter.before({
  "duration": 2998635100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter email \"diapatel80@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should verify the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 534580200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "diapatel80@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 129373300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 73587400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 401872200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 35
    }
  ],
  "location": "LoginSteps.iShouldVerifyTheErrorMessage(String)"
});
formatter.result({
  "duration": 45709200,
  "status": "passed"
});
formatter.after({
  "duration": 708089800,
  "status": "passed"
});
formatter.before({
  "duration": 2847335700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify User should login successfully with valid credentials",
  "description": "",
  "id": "login-test;verify-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter email \"dia81patel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"dia123\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I should verify logout link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 514303200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia81patel@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 112923500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 59847300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 373340000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldVerifyLogoutLinkIsDisplay()"
});
formatter.result({
  "duration": 20035435200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027OMDIYA\u0027, ip: \u0027192.168.0.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [4e4a9773db3abadec2a9ea32593e7c20, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51019}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51019/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e4a9773db3abadec2a9ea32593e7c20\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.getTextFromElement(Utility.java:65)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getlogoutText(LoginPage.java:78)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iShouldVerifyLogoutLinkIsDisplay(LoginSteps.java:52)\r\n\tat ✽.Then I should verify logout link is display(login.feature:31)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1165090400,
  "status": "passed"
});
formatter.before({
  "duration": 3012340600,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify User should logOut Successfully",
  "description": "",
  "id": "login-test;verify-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@sanity"
    },
    {
      "line": 33,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 36,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "I enter email \"dia81patel@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter password \"dia123\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on logout button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I should verify login link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 29800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 546039100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia81patel@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 162875900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dia123",
      "offset": 18
    }
  ],
  "location": "LoginSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 116704000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 520549900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLogoutButton()"
});
formatter.result({
  "duration": 20040512400,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027OMDIYA\u0027, ip: \u0027192.168.0.65\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [fa18587c138d086fa2d6ff26ac8bf84a, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\alpes\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51056}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51056/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fa18587c138d086fa2d6ff26ac8bf84a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utility.clickOnElement(Utility.java:54)\r\n\tat com.nopcommerce.demo.pages.LoginPage.clickonlogout(LoginPage.java:82)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginSteps.iClickOnLogoutButton(LoginSteps.java:58)\r\n\tat ✽.And I click on logout button(login.feature:40)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSteps.iShouldVerifyLoginLinkIsDisplay()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 913439000,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2929222200,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoke,"
    },
    {
      "line": 2,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I see the Register Text",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 68500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 671890700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iSeeTheRegisterText()"
});
formatter.result({
  "duration": 58149500,
  "status": "passed"
});
formatter.after({
  "duration": 819456400,
  "status": "passed"
});
formatter.before({
  "duration": 2363147000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User should verify That FirstName LastName Email Password And Confirm Password Fields Are Mandatory",
  "description": "",
  "id": "register;user-should-verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@sanity,"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I can click register Button",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should verify the error message for mandatory field",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 569647700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iCanClickRegisterButton()"
});
formatter.result({
  "duration": 111124300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iShouldVerifyTheErrorMessageForMandatoryField()"
});
formatter.result({
  "duration": 418105700,
  "status": "passed"
});
formatter.after({
  "duration": 873243000,
  "status": "passed"
});
formatter.before({
  "duration": 3006747800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "verify That User Should Create Account Successfully",
  "description": "",
  "id": "register;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I can fill mandetory field \"Male\",\"Mehir\",\"shah\",\"26\",\"January\",\"2018\",\"Mahi\",\"Ni45678\",\"Ni45678\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click register Button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I can Verify message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 38800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 575807700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 28
    },
    {
      "val": "Mehir",
      "offset": 35
    },
    {
      "val": "shah",
      "offset": 43
    },
    {
      "val": "26",
      "offset": 50
    },
    {
      "val": "January",
      "offset": 55
    },
    {
      "val": "2018",
      "offset": 65
    },
    {
      "val": "Mahi",
      "offset": 72
    },
    {
      "val": "Ni45678",
      "offset": 79
    },
    {
      "val": "Ni45678",
      "offset": 89
    }
  ],
  "location": "RegisterPageTestSteps.iCanFillMandetoryField(String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 1081168800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iCanClickRegisterButton()"
});
formatter.result({
  "duration": 732990300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTestSteps.iCanVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 29504800,
  "status": "passed"
});
formatter.after({
  "duration": 753243100,
  "status": "passed"
});
});