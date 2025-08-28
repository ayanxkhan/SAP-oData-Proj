// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/ui/model/odata/v2/ODataModel"
// ], (Controller,ODataModel) => {
//     "use strict";

//     return Controller.extend("practiceodata.controller.InitialView", {
//         onInit() {
//             var sUrl = "/v2/northwind/northwind.svc/";
//             var oModel = new sap.ui.model.odata.oDataModel(sUrl, true);
//             sap.ui.getCore().setModel(oModel);
//         }
//     });
// });


sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
], (Controller,ODataModel) => {
    "use strict";

    return Controller.extend("practiceodata.controller.InitialView", {
        onInit() {
            var sUrl = "/v2/northwind/northwind.svc/";
            // Use the correctly loaded ODataModel from the dependency array
            var oModel = new ODataModel(sUrl, { json: true }); // Added json: true as a common parameter
            sap.ui.getCore().setModel(oModel);
        }
    });
});