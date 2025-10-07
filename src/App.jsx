import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import Login from "./components/Login/Login";

import AccountGroup from "./components/Master/AccountGroup/AccountGroup";
import AccountMaster from "./components/Master/AccountMaster/AccountMaster";
import PatientMaster from "./components/Master/PatientMaster/PatientMaster";
import OtherMaster from "./components/Master/OtherMaster/OtherMaster";
import BillMaster from "./components/Master/BillMaster/BillMaster";
import SmsMaster from "./components/Master/SmsMaster/SmsMaster";
import DoctorMaster from "./components/Master/DoctorMaster/DoctorMaster";
import MarketingMaster from "./components/Master/MarketingMaster/MarketingMaster";

import Reception from "./components/FrontOffice/Reception/Reception";

import DoctorView from "./components/Doctor/DoctorView/DoctorView";

import DailyCollectionSummary from "./components/Report/DailyCollectionSummary/DailyCollectionSummary";
import DailyCollection from "./components/Report/DailyCollection/DailyCollection";
import PatientwiseStudy from "./components/Report/PatientwiseStudy/PatientwiseStudy";
import PaymentReport from "./components/Report/PaymentReport/PaymentReport";
import LogReport from "./components/Report/LogReport/LogReport";

import UserSetting from "./components/Setting/UserSetting/UserSetting";
import UserRightsSetting from "./components/Setting/UserRightsSetting/UserRightsSetting";
import GroupSetting from "./components/Setting/GroupSetting/GroupSetting";
import Dashboard from "./components/Dashboard/Dashboard";
import AccountMasterForm from "./components/Master/AccountMaster/AccountMasterForm";
import AccountGroupForm from "./components/Master/AccountGroup/AccountGroupForm";
import BillMasterFrom from "./components/Master/BillMaster/BillMasterForm";
import GroupBillForm from "./components/Master/BillMaster/GroupBillForm";
import DoctorMasterForm from "./components/Master/DoctorMaster/DoctorMasterForm";
import MarketingMasterForm from "./components/Master/MarketingMaster/MarketingMasterForm";
import GroupSettingForm from "./components/Setting/GroupSetting/GroupSettingForm";
import UserMasterForm from "./components/Setting/UserSetting/UserMasterForm";
import ReceptionForm from "./components/FrontOffice/Reception/ReceptionForm";
import PatientMasterForm from "./components/Master/PatientMaster/PatientMasterForm";

function App() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="/" element={<Login />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
      </Route>

      {/* Master */}
      <Route path="/master" element={<DashboardLayout />}>
        <Route path="accountmaster" element={<AccountMaster />} />
        <Route path="accountmaster/create" element={<AccountMasterForm />} />

        <Route path="accountgroup" element={<AccountGroup />} />
        <Route path="accountgroup/create" element={<AccountGroupForm />} />

        <Route path="patientmaster" element={<PatientMaster />} />
        <Route path="patientmaster/create" element={<PatientMasterForm />} />

        <Route path="othermaster" element={<OtherMaster />} />

        <Route path="billmaster" element={<BillMaster />} />
        <Route path="billmaster/create" element={<BillMasterFrom />} />
        <Route path="billmastergroup/create" element={<GroupBillForm />} />

        <Route path="smsmaster" element={<SmsMaster />} />

        <Route path="doctormaster" element={<DoctorMaster />} />
        <Route path="doctormaster/create" element={<DoctorMasterForm />} />

        <Route path="marketingmaster" element={<MarketingMaster />} />
        <Route
          path="marketingmaster/create"
          element={<MarketingMasterForm />}
        />
      </Route>

      {/* Front Office */}
      <Route path="/frontoffice" element={<DashboardLayout />}>
        <Route path="reception" element={<Reception />} />
        <Route path="reception/create" element={<ReceptionForm />} />
      </Route>

      {/* Report */}
      <Route path="/report" element={<DashboardLayout />}>
        <Route
          path="dailycollectionsummary"
          element={<DailyCollectionSummary />}
        />
        <Route path="dailycollection" element={<DailyCollection />} />
        <Route path="patientwisestudy" element={<PatientwiseStudy />} />
        <Route path="paymentreport" element={<PaymentReport />} />
        <Route path="logreport" element={<LogReport />} />
      </Route>

      {/* Doctor */}
      <Route path="/doctor" element={<DashboardLayout />}>
        <Route path="doctorview" element={<DoctorView />} />
      </Route>

      {/* Setting */}
      <Route path="/setting" element={<DashboardLayout />}>
        <Route path="usersetting" element={<UserSetting />} />
        <Route path="usersetting/create" element={<UserMasterForm />} />

        <Route path="groupsetting" element={<GroupSetting />} />
        <Route path="groupsetting/create" element={<GroupSettingForm />} />

        <Route path="userrightssetting" element={<UserRightsSetting />} />
      </Route>
    </Routes>
  );
}

export default App;
