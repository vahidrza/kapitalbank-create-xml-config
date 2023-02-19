let myInput = document.getElementById("myInput");
let myInput2 = document.getElementById("myInput2");
let myInput3 = document.getElementById("myInput3");
let myButton = document.getElementById("myButton");
let myButton2 = document.getElementById("myButton2");
let myButton3 = document.getElementById("myButton3");
let myButton4 = document.getElementById("myButton4");
let myButton5 = document.getElementById("myButton5");
let myButton6 = document.getElementById("myButton6");
const myForm = document.querySelector("#myForm");
const myBody = document.querySelector("#myBody");
let myOutput = "";

myaddEventListeners();

function myaddEventListeners() {
    myForm.addEventListener("click", getValues);
}

function getValues(e) {
    let myInputValue = myInput.value.trim();
    let myInput2Value = myInput2.value;
    let myInput3Value = myInput3.value.trim();

    checkMyDestination(e);

    function checkMyDestination(e) {

        if (e.target.id === 'myButton' || e.target.id === 'myButton2' || e.target.id === 'myButton3' || e.target.id === 'myButton4' || e.target.id === 'myButton6') {
            checkMyValue(e);

            function checkMyValue() {
                if (myInputValue !== "" && myInput2Value !== "" && myInput3Value !== "") {
                    giveMyValue(e);
                    myReportFunction("text-success", `${myInputValue}`, 3000000);
                    myReportFunction("text-success", "Done!", 3000);
                } else {
                    myReportFunction("text-danger", "Nəyisə boş qoymusan...", 3000);
                }
            }
        }

        function giveMyValue() {
            if (e.target.id === 'myButton') {
                myOutput += `   
    <Merchant MerchantID="${myInputValue}" Name="${myInput2Value}" XmlOutToNotBase64="true" acqBIN="" profileId="3DS_KAPS" >
            <AcquirerMerchantID>${myInputValue}</AcquirerMerchantID>
            <MCC>${myInput3Value}</MCC>
            <MerchantName>${myInput2Value}</MerchantName>
            <Connections>
                    <POS FrameType="1" TerminalID="${myInputValue}" host="172.20.1.44" port="7002"/>
            </Connections>
    </Merchant>
            `;
            } else if (e.target.id === 'myButton2') {
                myOutput += `   
    <Merchant MerchantID="${myInputValue}" Name="${myInput2Value}" XmlOutToNotBase64="true" acqBIN="" profileId="3DS_KAPS" >
            <Operations>
                    <CardRegistration>true</CardRegistration>
            </Operations>
            <AcquirerMerchantID>${myInputValue}</AcquirerMerchantID>
            <MCC>${myInput3Value}</MCC>
            <MerchantName>${myInput2Value}</MerchantName>
            <CardRegistrationProtocol>TPTP</CardRegistrationProtocol>
            <AttachCardToRetailer>true</AttachCardToRetailer>
            <CardRegistration>
                    <RegisterCardOnSuccess>true</RegisterCardOnSuccess>
                    <SaveCardUIDToOrder>true</SaveCardUIDToOrder>
                    <CheckRegisterCardOn>true</CheckRegisterCardOn>
            </CardRegistration>
            <Connections>
                    <POS FrameType="1" TerminalID="${myInputValue}" host="172.20.1.44" port="7002"/>
            </Connections>
    </Merchant>
            `;
            } else if (e.target.id === 'myButton3') {
                myOutput += `   
    <Merchant MerchantID="${myInputValue}" Name="${myInput2Value}" XmlOutToNotBase64="true" acqBIN="" profileId="3DS_KAPS" >
            <Operations>
                    <P2PCardTransfer>true</P2PCardTransfer>
                    <P2PTransfer>true</P2PTransfer>
                    <P2PCredit>true</P2PCredit>
                    <P2PDebit>true</P2PDebit>
            </Operations>
            <AcquirerMerchantID>${myInputValue}</AcquirerMerchantID>
            <MCC>${myInput3Value}</MCC>
            <MerchantName>${myInput2Value}</MerchantName>
            <Connections>
                    <POS FrameType="1" TerminalID="${myInputValue}" host="172.20.1.44" port="7002"/>
            </Connections>
    </Merchant>
            `;
            } else if (e.target.id === 'myButton4') {
                myOutput += `   
    <Merchant MerchantID="${myInputValue}" Name="${myInput2Value}" XmlOutToNotBase64="true" acqBIN="" profileId="3DS_KAPS" >
            <Operations>
                    <CardRegistration>true</CardRegistration>
                    <P2PCardTransfer>true</P2PCardTransfer>
                    <P2PTransfer>true</P2PTransfer>
                    <P2PCredit>true</P2PCredit>
                    <P2PDebit>true</P2PDebit>
            </Operations>
            <AcquirerMerchantID>${myInputValue}</AcquirerMerchantID>
            <MCC>${myInput3Value}</MCC>
            <MerchantName>${myInput2Value}</MerchantName>
            <CardRegistrationProtocol>TPTP</CardRegistrationProtocol>
            <AttachCardToRetailer>true</AttachCardToRetailer>
            <CardRegistration>
                    <RegisterCardOnSuccess>true</RegisterCardOnSuccess>
                    <SaveCardUIDToOrder>true</SaveCardUIDToOrder>
                    <CheckRegisterCardOn>true</CheckRegisterCardOn>
            </CardRegistration>
            <Connections>
                    <POS FrameType="1" TerminalID="${myInputValue}" host="172.20.1.44" port="7002"/>
            </Connections>
    </Merchant>
            `;
            } else if (e.target.id === 'myButton6') {
                myOutput += `   
    <Merchant MerchantID="${myInputValue}" Name="${myInput2Value}" XmlOutToNotBase64="true" acqBIN="" profileId="3DS_KAPS" >
            <AcquirerMerchantID>${myInputValue}</AcquirerMerchantID>
            <MCC>${myInput3Value}</MCC>
            <Cards>
                <Prefix Begin="67686766" Brand="MC" DirectoryId="3DS_MC" End="" NeedExpDate="false" NeedVerify3Ds="true" NeedCvv2="true" POSConditionIfNotEnrolled="81" POSConditionIfNotEnrolledU="81" POSConditionIfAttempt="81" POSConditionIfPAResU="81" PurchaseIfNotEnrolled="false" PurchaseIfNotVerified="false" PurchaseIfUnknown="false" tds2DirectoryId="MC_3DS2" tds2EndProtocolVersion="2.1.0" tds2Mandatory="true" tds2MethodURL="false" tds2StartProtocolVersion="2.1.0"/>
                <Prefix Begin="51030718" Brand="MC" DirectoryId="3DS_MC" End="" NeedExpDate="false" NeedVerify3Ds="true" NeedCvv2="true" POSConditionIfNotEnrolled="81" POSConditionIfNotEnrolledU="81" POSConditionIfAttempt="81" POSConditionIfPAResU="81" PurchaseIfNotEnrolled="false" PurchaseIfNotVerified="false" PurchaseIfUnknown="false" tds2DirectoryId="MC_3DS2" tds2EndProtocolVersion="2.1.0" tds2Mandatory="true" tds2MethodURL="false" tds2StartProtocolVersion="2.1.0"/>
            </Cards>
            <MerchantName>${myInput2Value}</MerchantName>
            <Connections>
                    <POS FrameType="1" TerminalID="${myInputValue}" host="172.20.1.44" port="7002"/>
            </Connections>
    </Merchant>
            `;
            }

            myInput.value = "";
            myInput2.value = "";
            myInput3.value = "";
        }
        if (e.target.id === 'myButton5') {
            console.log(myOutput);
            navigator.clipboard.writeText(myOutput);
            myReportFunction("text-success", "Successfully Exported to Console & Copied to Clipboard!", 30000);
            myOutput = "";
        }
    }
    e.preventDefault();
    myInputValue = "";
    myInput2Value = "";
    myInput3Value = "";
}

function myReportFunction(type, text, time) {
    let myReport = document.createElement("h1");
    myReport.className = type;
    myReport.appendChild(document.createTextNode(text));
    myBody.appendChild(myReport);

    setTimeout(() => {
        myReport.remove();
    }, time);
}