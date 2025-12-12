import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const axiosSecure = useAxiosSecure();
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const isMounted = useRef(false);
  const sessionId = searchParams.get("session_id");
  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;
    if (sessionId) {
      axiosSecure
        .patch(`/payment-success?session_id=${sessionId}`)
        .then((res) => {
          console.log(res.data);
          setPaymentInfo({
            transactionId: res.data.transactionId,
          });
        });
    }
  }, [sessionId,axiosSecure]);
  return (
    <div>
      <h3>Payment Successful</h3>
      <p>Transaction Id : {paymentInfo.transactionId}</p>
    </div>
  );
};

export default PaymentSuccess;
