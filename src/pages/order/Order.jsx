import React from "react";
import HorizontalLinearStepper from "../../components/stepper/StepperDesktop";
import VerticalLinearStepper from "../../components/stepper/StepperMobile";
import { useMediaQuery } from 'react-responsive';

const Order = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 700px)'
  })
  const isMobile = useMediaQuery({
    query: '(max-width: 700px)'
  })

  return (
    <>
      {isDesktopOrLaptop && <HorizontalLinearStepper />}
      {isMobile && <VerticalLinearStepper />}
    </>
  );
};

export default Order;