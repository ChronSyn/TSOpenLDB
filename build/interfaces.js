"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ESOAPStaffAction;
(function (ESOAPStaffAction) {
    ESOAPStaffAction["GetArrBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails";
    ESOAPStaffAction["GetArrDepBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails";
    ESOAPStaffAction["GetArrivalDepartureBoardByCrs"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByCRS";
    ESOAPStaffAction["GetArrivalDepartureBoardByTiploc"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalDepartureBoardByTIPLOC";
    ESOAPStaffAction["GetArrivalBoardByCrs"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByCRS";
    ESOAPStaffAction["GetArrivalBoardByTiploc"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetArrivalBoardByTIPLOC";
    ESOAPStaffAction["GetDepartureBoardByCrs"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByCRS";
    ESOAPStaffAction["GetDepartureBoardByTiploc"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDepartureBoardByTIPLOC";
    ESOAPStaffAction["GetDepBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails";
    ESOAPStaffAction["GetDisruptionList"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetDisruptionList";
    ESOAPStaffAction["GetHistoricDepartureBoard"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricDepartureBoard";
    ESOAPStaffAction["GetHistoricServiceDetails"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricServiceDetails";
    ESOAPStaffAction["GetHistoricTimeLine"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetHistoricTimeLine";
    ESOAPStaffAction["GetServiceDetailsByRid"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/GetServiceDetailsByRID";
    ESOAPStaffAction["QueryHistoricServices"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryHistoricServices";
    ESOAPStaffAction["QueryServices"] = "http://thalesgroup.com/RTTI/2012-01-13/ldbsv/QueryServices";
    ESOAPStaffAction["GetDepartureBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetDepBoardWithDetails";
    ESOAPStaffAction["GetArrivalBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrBoardWithDetails";
    ESOAPStaffAction["GetArrivalDepartureBoard"] = "GetArrivalDepartureBoard";
    ESOAPStaffAction["GetArrivalDepartureBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetArrDepBoardWithDetails";
    ESOAPStaffAction["GetNextDepartures"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDepartures";
    ESOAPStaffAction["GetNextDeparturesWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetNextDeparturesWithDetails";
    ESOAPStaffAction["GetFastestDepartures"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDepartures";
    ESOAPStaffAction["GetFastestDeparturesWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldbsv/GetFastestDeparturesWithDetails";
})(ESOAPStaffAction = exports.ESOAPStaffAction || (exports.ESOAPStaffAction = {}));
var ESOAPAction;
(function (ESOAPAction) {
    ESOAPAction["GetDepartureBoard"] = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetDepartureBoard";
    ESOAPAction["GetDepartureBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetDepBoardWithDetails";
    ESOAPAction["GetArrivalBoard"] = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalBoard";
    ESOAPAction["GetArrivalBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrBoardWithDetails";
    ESOAPAction["GetArrivalDepartureBoard"] = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetArrivalDepartureBoard";
    ESOAPAction["GetArrivalDepartureBoardWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetArrDepBoardWithDetails";
    ESOAPAction["GetNextDepartures"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDepartures";
    ESOAPAction["GetNextDeparturesWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetNextDeparturesWithDetails";
    ESOAPAction["GetFastestDepartures"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDepartures";
    ESOAPAction["GetFastestDeparturesWithDetails"] = "http://thalesgroup.com/RTTI/2015-05-14/ldb/GetFastestDeparturesWithDetails";
    ESOAPAction["GetServiceDetails"] = "http://thalesgroup.com/RTTI/2012-01-13/ldb/GetServiceDetails";
})(ESOAPAction = exports.ESOAPAction || (exports.ESOAPAction = {}));
var EOperation;
(function (EOperation) {
    EOperation["getDepartureBoard"] = "GetDepartureBoard";
    EOperation["getDepartureBoardWithDetails"] = "GetDepBoardWithDetails";
    EOperation["getArrivalBoard"] = "GetArrivalBoard";
    EOperation["getArrivalBoardWithDetails"] = "GetArrBoardWithDetails";
    EOperation["getArrivalDepartureBoard"] = "GetArrivalDepartureBoard";
    EOperation["getArrivalDepartureBoardWithDetails"] = "GetArrDepBoardWithDetails";
    EOperation["getNextDepartures"] = "GetNextDepartures";
    EOperation["getNextDeparturesWithDetails"] = "GetNextDeparturesWithDetails";
    EOperation["getFastestDepartures"] = "GetFastestDepartures";
    EOperation["getFastestDeparturesWithDetails"] = "GetFastestDeparturesWithDetails";
    EOperation["getServiceDetails"] = "GetServiceDetails";
})(EOperation = exports.EOperation || (exports.EOperation = {}));
var EStaffOperation;
(function (EStaffOperation) {
    EStaffOperation["getArrBoardWithDetails"] = "GetArrBoardWithDetails";
    EStaffOperation["getArrDepBoardWithDetails"] = "GetArrDepBoardWithDetails";
    EStaffOperation["getArrivalDepartureBoardByCrs"] = "GetArrivalDepartureBoardByCRS";
    EStaffOperation["getArrivalDepartureBoardByTiploc"] = "GetArrivalDepartureBoardByTIPLOC";
    EStaffOperation["getArrivalBoardByCrs"] = "GetArrivalBoardByCRS";
    EStaffOperation["getArrivalBoardByTiploc"] = "GetArrivalBoardByTIPLOC";
    EStaffOperation["getDepartureBoardByCrs"] = "GetDepartureBoardByCRS";
    EStaffOperation["getDepartureBoardByTiploc"] = "GetDepartureBoardByTIPLOC";
    EStaffOperation["getDepBoardWithDetails"] = "GetDepBoardWithDetails";
    EStaffOperation["getDisruptionList"] = "GetDisruptionList";
    EStaffOperation["getHistoricDepartureBoard"] = "GetHistoricDepartureBoard";
    EStaffOperation["getHistoricServiceDetails"] = "GetHistoricServiceDetails";
    EStaffOperation["getHistoricTimeLine"] = "GetHistoricTimeLine";
    EStaffOperation["getServiceDetailsByRid"] = "GetServiceDetailsByRID";
    EStaffOperation["queryHistoricServices"] = "QueryHistoricServices";
    EStaffOperation["queryServices"] = "QueryServices";
    EStaffOperation["getNextDepartures"] = "GetNextDepartures";
    EStaffOperation["getNextDeparturesWithDetails"] = "GetNextDeparturesWithDetails";
    EStaffOperation["getFastestDepartures"] = "GetFastestDepartures";
    EStaffOperation["getFastestDeparturesWithDetails"] = "GetFastestDeparturesWithDetails";
    EStaffOperation["getTocList"] = "GetTocList";
    EStaffOperation["getStationList"] = "GetStationList";
    EStaffOperation["getReasonCode"] = "GetReasonCode";
    EStaffOperation["getReasonCodeList"] = "GetReasonCodeList";
    // getDepartureBoard =      "GetDepartureBoard",
    // getDepartureBoardWithDetails =   "GetDepBoardWithDetails",
    // getArrivalBoard =      "GetArrivalBoard",
    // getArrivalBoardWithDetails =   "GetArrBoardWithDetails",
    // getArrivalDepartureBoard =      "GetArrivalDepartureBoard",
    // getArrivalDepartureBoardWithDetails =   "GetArrDepBoardWithDetails",
    // getServiceDetails =      "GetServiceDetails",
})(EStaffOperation = exports.EStaffOperation || (exports.EStaffOperation = {}));
var EFilterType;
(function (EFilterType) {
    EFilterType["from"] = "from";
    EFilterType["to"] = "to";
})(EFilterType = exports.EFilterType || (exports.EFilterType = {}));
var EServices;
(function (EServices) {
    EServices["TRAIN"] = "P";
    EServices["BUS"] = "B";
    EServices["SHIP"] = "S";
})(EServices = exports.EServices || (exports.EServices = {}));
var EDateModifier;
(function (EDateModifier) {
    EDateModifier["PREVIOUS"] = "Previous Day";
    EDateModifier["SAME"] = "Same Day";
    EDateModifier["NEXT"] = "Next Day";
})(EDateModifier = exports.EDateModifier || (exports.EDateModifier = {}));
var EListFields;
(function (EListFields) {
    EListFields["crsList"] = "crs";
    EListFields["filterList"] = "crs";
    EListFields["filterCrs"] = "filtercrs";
    EListFields["filterTOC"] = "toc";
})(EListFields = exports.EListFields || (exports.EListFields = {}));
var EOperationInfoEntryType;
(function (EOperationInfoEntryType) {
    EOperationInfoEntryType["BOARD"] = "board";
    EOperationInfoEntryType["DEPARTURE"] = "departure";
    EOperationInfoEntryType["SERVICE"] = "service";
})(EOperationInfoEntryType = exports.EOperationInfoEntryType || (exports.EOperationInfoEntryType = {}));
var EOperationInfoEntries;
(function (EOperationInfoEntries) {
    EOperationInfoEntries[EOperationInfoEntries["GetDeparturesBoard"] = 0] = "GetDeparturesBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetDepBoardWithDetails"] = 1] = "GetDepBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoard"] = 2] = "GetArrivalBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetArrBoardWithDetails"] = 3] = "GetArrBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoard"] = 4] = "GetArrivalDepartureBoard";
    EOperationInfoEntries[EOperationInfoEntries["GetArrDepBoardWithDetails"] = 5] = "GetArrDepBoardWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetNextDepartures"] = 6] = "GetNextDepartures";
    EOperationInfoEntries[EOperationInfoEntries["GetNextDeparturesWithDetails"] = 7] = "GetNextDeparturesWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetFastestDepartures"] = 8] = "GetFastestDepartures";
    EOperationInfoEntries[EOperationInfoEntries["GetFastestDeparturesWithDetails"] = 9] = "GetFastestDeparturesWithDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetServiceDetails"] = 10] = "GetServiceDetails";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoardByCrs"] = 11] = "GetArrivalDepartureBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalDepartureBoardByTiploc"] = 12] = "GetArrivalDepartureBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoardByCrs"] = 13] = "GetArrivalBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetArrivalBoardByTiploc"] = 14] = "GetArrivalBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetDepartureBoardByCrs"] = 15] = "GetDepartureBoardByCrs";
    EOperationInfoEntries[EOperationInfoEntries["GetDepartureBoardByTiploc"] = 16] = "GetDepartureBoardByTiploc";
    EOperationInfoEntries[EOperationInfoEntries["GetHistoricDepartureBoard"] = 17] = "GetHistoricDepartureBoard";
})(EOperationInfoEntries = exports.EOperationInfoEntries || (exports.EOperationInfoEntries = {}));
var ELDBWSOperationInfoKeys;
(function (ELDBWSOperationInfoKeys) {
    ELDBWSOperationInfoKeys["GetStationBoardResult"] = "GetStationBoardResult";
    ELDBWSOperationInfoKeys["GetDeparturesBoard"] = "DeparturesBoard";
    ELDBWSOperationInfoKeys["GetServiceDetailsResult"] = "GetServiceDetailsResult";
})(ELDBWSOperationInfoKeys = exports.ELDBWSOperationInfoKeys || (exports.ELDBWSOperationInfoKeys = {}));
var EOpenLDBSVWSCoachClass;
(function (EOpenLDBSVWSCoachClass) {
    EOpenLDBSVWSCoachClass["First"] = "First";
    EOpenLDBSVWSCoachClass["Mixed"] = "Mixed";
    EOpenLDBSVWSCoachClass["Standard"] = "Standard";
})(EOpenLDBSVWSCoachClass = exports.EOpenLDBSVWSCoachClass || (exports.EOpenLDBSVWSCoachClass = {}));
var EOpenLDBSVWSToiletStatus;
(function (EOpenLDBSVWSToiletStatus) {
    EOpenLDBSVWSToiletStatus["Unknown"] = "Unknown";
    EOpenLDBSVWSToiletStatus["InService"] = "InService";
    EOpenLDBSVWSToiletStatus["NotInService"] = "NotInService";
})(EOpenLDBSVWSToiletStatus = exports.EOpenLDBSVWSToiletStatus || (exports.EOpenLDBSVWSToiletStatus = {}));
var EOpenLDBSVWSToiletValue;
(function (EOpenLDBSVWSToiletValue) {
    EOpenLDBSVWSToiletValue["Unknown"] = "Unknown";
    EOpenLDBSVWSToiletValue["None"] = "None";
    EOpenLDBSVWSToiletValue["Standard"] = "Standard";
    EOpenLDBSVWSToiletValue["Accessible"] = "Accessible";
})(EOpenLDBSVWSToiletValue = exports.EOpenLDBSVWSToiletValue || (exports.EOpenLDBSVWSToiletValue = {}));
var EOpenLDBSVWSActualForecast;
(function (EOpenLDBSVWSActualForecast) {
    EOpenLDBSVWSActualForecast["Actual"] = "Actual";
    EOpenLDBSVWSActualForecast["Forecast"] = "Forecast";
    EOpenLDBSVWSActualForecast["Delayed"] = "Delayed";
})(EOpenLDBSVWSActualForecast = exports.EOpenLDBSVWSActualForecast || (exports.EOpenLDBSVWSActualForecast = {}));
//# sourceMappingURL=interfaces.js.map