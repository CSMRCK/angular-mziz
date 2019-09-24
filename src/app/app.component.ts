import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCalculate = false;
  priceSize = 3;
  priceCase = 3;
  priceCPU = 2;
  priceSSD = 3;
  priceGPU = 3;
  priceBattery = 2;
  sizePrice = 0.33;
  sizeCase = 2;
  sizeCPU = 0.33;
  sizeSSD = 5;
  sizeGPU = 2;
  sizeBattery = 0.33;
  casePrice = 0.33;
  caseSize = 0.5;
  caseCPU = 0.2;
  caseSSD = 2;
  caseGPU = 0.33;
  caseBattery = 0.2;
  cpuPrice = 0.5;
  cpuSize = 2;
  cpuCase = 5;
  cpuSSD = 1;
  cpuGPU = 5;
  cpuBattery = 1;
  ssdPrice = 0.33;
  ssdSize = 0.2;
  ssdCase = 0.5;
  ssdCPU = 1;
  ssdGPU = 2;
  ssdBattery = 1;
  gpuPrice = 0.33;
  gpuSize = 0.2;
  gpuCase = 3;
  gpuCPU = 0.2;
  gpuSSD = 0.5;
  gpuBattery = 0.5;
  batteryPrice = 0.5;
  batterySize = 3;
  batteryCase = 5;
  batteryCPU = 1;
  batterySSD = 1;
  batteryGPU = 2;
  //MyVectors

  myPriceVector;
  mySizeVector;
  myCaseVector;
  myCPUVector;
  mySSDVector;
  myGPUVector;
  myBatteryVector;

  //PriorityVector

  PriorityVectorPrice;
  PriprityVectorSize;
  PriprityVectorCase;
  PriprityVectorCPU;
  PriprityVectorSSD;
  PriprityVectorGPU;
  PriprityVectorBattery;


  //Lyamda

  priceLyambda;
  sizeLyambda;
  caseLyambda;
  cpuLyambda;
  gpuLyambda;
  ssdLyambda;
  batteryLyambda;

  //Sum 

  priceSum;
  sizeSum;
  caseSum;
  cpuSum;
  ssdSum;
  gpuSum;
  batterySum;
  LyambdaSum;
  //SumVectors
  MyVectorSum;
  PriorityVectorSumm;


  //Price
  LenovoItoAcerA_Pricer = 3;
  LenovoItoLenovoG_Pricer = 3;
  LenovoItoAcerS_Pricer = 3;
  AcerAtoLenovoI_Pricer = 0.33;
  AcerAtoLenovoG_Pricer = 1;
  AcerAtoAcerS_Pricer = 2;
  LenovoGtoLenovoI_Pricer = 0.33;
  LenovoGtoAcerA_Pricer = 1;
  LenovoGtoAcerS_Pricer = 3;
  AcerStoLenovoI_Pricer = 0.33;
  AcerStoAcerA_Pricer = 0.5;
  AcerStoLenovoG_Pricer = 0.33;
  MyPriceCriteriesVectorLenovoI;
  MyPriceCriteriesVectorAcerA;
  MyPriceCriteriesVectorLenovoG;
  MyPriceCriteriesVectorAcerS;
  MyPriceVectorCriteriesSum;
  LenovoICriteriesPriceSum;
  AcerACriteriesPriceSum;
  LenovoGCriteriesPriceSum;
  AcerSCriteriesPriceSum;

  PricePriorityCriteriesVectorLenovoI;
  PricePrioritCriteriesVectorAcerA;
  PricePrioritCriteriesVectorLenovoG;
  PricePrioritCriteriesVectorAcerS;
  PricePrioritVectorCriteriesSum;

  PricePriorityCriteriesLyambdaLenovoI;
  PricePrioritCriteriesLyambdAcerA;
  PricePrioritCriteriesLyambdLenovoG;
  PricePrioritCriteriesLyambdAcerS;
  PricePrioritLyambdCriteriesSum;


//Size
LenovoItoAcerA_Size = 2;
LenovoItoLenovoG_Size = 0.33;
LenovoItoAcerS_Size = 1;
AcerAtoLenovoI_Size = 0.5;
AcerAtoLenovoG_Size = 2;
AcerAtoAcerS_Size = 0.33;
LenovoGtoLenovoI_Size = 3;
LenovoGtoAcerA_Size = 0.5;
LenovoGtoAcerS_Size = 2;
AcerStoLenovoI_Size = 1;
AcerStoAcerA_Size = 3;
AcerStoLenovoG_Size = 0.5;
MySizeCriteriesVectorLenovoI;
MySizeCriteriesVectorAcerA;
MySizeCriteriesVectorLenovoG;
MySizeCriteriesVectorAcerS;
MySizeVectorCriteriesSum;
LenovoICriteriesSizeSum;
AcerACriteriesSizeSum;
LenovoGCriteriesSizeSum;
AcerSCriteriesSizeSum;

SizePriorityCriteriesVectorLenovoI;
SizePrioritCriteriesVectorAcerA;
SizePrioritCriteriesVectorLenovoG;
SizePrioritCriteriesVectorAcerS;
SizePrioritVectorCriteriesSum;

SizePriorityCriteriesLyambdaLenovoI;
SizePrioritCriteriesLyambdAcerA;
SizePrioritCriteriesLyambdLenovoG;
SizePrioritCriteriesLyambdAcerS;
SizePrioritLyambdCriteriesSum;

//Case
LenovoItoAcerA_Case = 3;
LenovoItoLenovoG_Case = 2;
LenovoItoAcerS_Case = 1;
AcerAtoLenovoI_Case = 0.33;
AcerAtoLenovoG_Case = 0.33;
AcerAtoAcerS_Case = 3;
LenovoGtoLenovoI_Case = 0.5;
LenovoGtoAcerA_Case = 3;
LenovoGtoAcerS_Case = 2;
AcerStoLenovoI_Case = 1;
AcerStoAcerA_Case = 0.33;
AcerStoLenovoG_Case = 0.5;
MyCaseCriteriesVectorLenovoI;
MyCaseCriteriesVectorAcerA;
MyCaseCriteriesVectorLenovoG;
MyCaseCriteriesVectorAcerS;
MyCaseVectorCriteriesSum;
LenovoICriteriesCaseSum;
AcerACriteriesCaseSum;
LenovoGCriteriesCaseSum;
AcerSCriteriesCaseSum;

CasePriorityCriteriesVectorLenovoI;
CasePrioritCriteriesVectorAcerA;
CasePrioritCriteriesVectorLenovoG;
CasePrioritCriteriesVectorAcerS;
CasePrioritVectorCriteriesSum;

CasePriorityCriteriesLyambdaLenovoI;
CasePrioritCriteriesLyambdAcerA;
CasePrioritCriteriesLyambdLenovoG;
CasePrioritCriteriesLyambdAcerS;
CasePrioritLyambdCriteriesSum;


//CPU
LenovoItoAcerA_CPU = 3;
LenovoItoLenovoG_CPU = 1;
LenovoItoAcerS_CPU = 1;
AcerAtoLenovoI_CPU = 0.33;
AcerAtoLenovoG_CPU = 0.5;
AcerAtoAcerS_CPU = 1;
LenovoGtoLenovoI_CPU = 1;
LenovoGtoAcerA_CPU = 2;
LenovoGtoAcerS_CPU= 0.33;
AcerStoLenovoI_CPU = 1;
AcerStoAcerA_CPU = 1;
AcerStoLenovoG_CPU = 3;
MyCPUCriteriesVectorLenovoI;
MyCPUCriteriesVectorAcerA;
MyCPUCriteriesVectorLenovoG;
MyCPUCriteriesVectorAcerS;
MyCPUVectorCriteriesSum;
LenovoICriteriesCPUSum;
AcerACriteriesCPUSum;
LenovoGCriteriesCPUSum;
AcerSCriteriesCPUSum;

CPUPriorityCriteriesVectorLenovoI;
CPUPrioritCriteriesVectorAcerA;
CPUPrioritCriteriesVectorLenovoG;
CPUPrioritCriteriesVectorAcerS;
CPUPrioritVectorCriteriesSum;

CPUPriorityCriteriesLyambdaLenovoI;
CPUPrioritCriteriesLyambdAcerA;
CPUPrioritCriteriesLyambdLenovoG;
CPUPrioritCriteriesLyambdAcerS;
CPUPrioritLyambdCriteriesSum;

//SSD
LenovoItoAcerA_SSD = 1;
LenovoItoLenovoG_SSD = 1;
LenovoItoAcerS_SSD = 3;
AcerAtoLenovoI_SSD = 1;
AcerAtoLenovoG_SSD = 2;
AcerAtoAcerS_SSD = 0.5;
LenovoGtoLenovoI_SSD = 1;
LenovoGtoAcerA_SSD = 0.5;
LenovoGtoAcerS_SSD= 1;
AcerStoLenovoI_SSD = 0.33;
AcerStoAcerA_SSD = 2;
AcerStoLenovoG_SSD = 1;
MySSDCriteriesVectorLenovoI;
MySSDCriteriesVectorAcerA;
MySSDCriteriesVectorLenovoG;
MySSDCriteriesVectorAcerS;
MySSDVectorCriteriesSum;
LenovoICriteriesSSDSum;
AcerACriteriesSSDSum;
LenovoGCriteriesSSDSum;
AcerSCriteriesSSDSum;

SSDPriorityCriteriesVectorLenovoI;
SSDPrioritCriteriesVectorAcerA;
SSDPrioritCriteriesVectorLenovoG;
SSDPrioritCriteriesVectorAcerS;
SSDPrioritVectorCriteriesSum;

SSDPriorityCriteriesLyambdaLenovoI;
SSDPrioritCriteriesLyambdAcerA;
SSDPrioritCriteriesLyambdLenovoG;
SSDPrioritCriteriesLyambdAcerS;
SSDPrioritLyambdCriteriesSum;


//GPU
LenovoItoAcerA_GPU = 3;
LenovoItoLenovoG_GPU = 2;
LenovoItoAcerS_GPU = 1;
AcerAtoLenovoI_GPU = 0.33;
AcerAtoLenovoG_GPU = 2;
AcerAtoAcerS_GPU = 0.5;
LenovoGtoLenovoI_GPU = 0.5;
LenovoGtoAcerA_GPU = 0.2;
LenovoGtoAcerS_GPU= 3;
AcerStoLenovoI_GPU = 1;
AcerStoAcerA_GPU = 2;
AcerStoLenovoG_GPU = 0.33;
MyGPUCriteriesVectorLenovoI;
MyGPUCriteriesVectorAcerA;
MyGPUCriteriesVectorLenovoG;
MyGPUCriteriesVectorAcerS;
MyGPUVectorCriteriesSum;
LenovoICriteriesGPUSum;
AcerACriteriesGPUSum;
LenovoGCriteriesGPUSum;
AcerSCriteriesGPUSum;

GPUPriorityCriteriesVectorLenovoI;
GPUPrioritCriteriesVectorAcerA;
GPUPrioritCriteriesVectorLenovoG;
GPUPrioritCriteriesVectorAcerS;
GPUPrioritVectorCriteriesSum;

GPUPriorityCriteriesLyambdaLenovoI;
GPUPrioritCriteriesLyambdAcerA;
GPUPrioritCriteriesLyambdLenovoG;
GPUPrioritCriteriesLyambdAcerS;
GPUPrioritLyambdCriteriesSum;


//Battery
LenovoItoAcerA_Battery = 1;
LenovoItoLenovoG_Battery = 3;
LenovoItoAcerS_Battery = 0.5;
AcerAtoLenovoI_Battery = 1;
AcerAtoLenovoG_Battery = 2;
AcerAtoAcerS_Battery = 3;
LenovoGtoLenovoI_Battery = 0.33;
LenovoGtoAcerA_Battery = 0.5;
LenovoGtoAcerS_Battery= 0.5;
AcerStoLenovoI_Battery = 2;
AcerStoAcerA_Battery = 0.33;
AcerStoLenovoG_Battery = 2;
MyBatteryCriteriesVectorLenovoI;
MyBatteryCriteriesVectorAcerA;
MyBatteryCriteriesVectorLenovoG;
MyBatteryCriteriesVectorAcerS;
MyBatteryVectorCriteriesSum;
LenovoICriteriesBatterySum;
AcerACriteriesBatterySum;
LenovoGCriteriesBatterySum;
AcerSCriteriesBatterySum;

BatteryPriorityCriteriesVectorLenovoI;
BatteryPrioritCriteriesVectorAcerA;
BatteryPrioritCriteriesVectorLenovoG;
BatteryPrioritCriteriesVectorAcerS;
BatteryPrioritVectorCriteriesSum;

BatteryPriorityCriteriesLyambdaLenovoI;
BatteryPrioritCriteriesLyambdAcerA;
BatteryPrioritCriteriesLyambdLenovoG;
BatteryPrioritCriteriesLyambdAcerS;
BatteryPrioritLyambdCriteriesSum;






// PriorityVectorPrice;
// PriprityVectorSize;
// PriprityVectorCase;
// PriprityVectorCPU;
// PriprityVectorSSD;
// PriprityVectorGPU;
// PriprityVectorBattery;



MyVectorForCriteries(element1, element2, element3, element4) {
  return Math.pow((element1*element2*element3*element4), 1/4);
}
MyVectorForCriteriesSum(element1, element2, element3, element4) {
  return element1+element2+element3+element4;
}

LymbadaCriteries(element1, element2) {
  return element1*element2;
}

  MyVector(element1, element2, element3, element4, element5, element6, element7) {
    return Math.pow((element1*element2*element3*element4*element5*element6*element7), 1/7);
  }

  Sum(element1, element2, element3, element4, element5, element6, element7) {
    return element1 + element2 + element3 + element4 + element5 + element6 + element7;
  }

  PriorityVector(element1, element2) {
    return (element1 / element2);
  }
  MyVectorSumm(element1, element2, element3, element4, element5, element6, element7) {
    return (element1+ element2+ element3+ element4+ element5+ element6+ element7);
  }
  Lyambda(element1, element2) {
    return (element1*element2);
  }

  CriteiesSum(element1, element2, element3, element4) {
    return element1+element2+element3+element4;
  }
  PriorityVectorCriteries(element1, element2) {
    return element1/element2;
  } 


Price() {
   this.MyPriceCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_Pricer, this.LenovoItoLenovoG_Pricer, this.LenovoItoAcerS_Pricer);
   this.MyPriceCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_Pricer, this.AcerAtoLenovoG_Pricer, this.AcerAtoAcerS_Pricer);
   this.MyPriceCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_Pricer, this.LenovoGtoAcerA_Pricer, this.LenovoGtoAcerS_Pricer);
   this.MyPriceCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_Pricer, this.AcerStoAcerA_Pricer, this.AcerStoLenovoG_Pricer);

   this.MyPriceVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MyPriceCriteriesVectorLenovoI,this.MyPriceCriteriesVectorAcerA,this.MyPriceCriteriesVectorLenovoG,this.MyPriceCriteriesVectorAcerS );

   this.LenovoICriteriesPriceSum = this.CriteiesSum(1,this.AcerAtoLenovoI_Pricer, this.LenovoGtoLenovoI_Pricer, this.AcerStoLenovoI_Pricer);
   this.AcerACriteriesPriceSum = this.CriteiesSum(1, this.LenovoItoAcerA_Pricer, this.LenovoGtoAcerA_Pricer ,this.AcerStoAcerA_Pricer);
   this.LenovoGCriteriesPriceSum = this.CriteiesSum(1, this.LenovoItoLenovoG_Pricer, this.AcerAtoLenovoG_Pricer, this.AcerStoLenovoG_Pricer);
   this.AcerSCriteriesPriceSum = this.CriteiesSum(1,this.LenovoItoAcerS_Pricer, this.AcerAtoAcerS_Pricer, this.LenovoGtoAcerS_Pricer );

   this.PricePriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MyPriceCriteriesVectorLenovoI,this.MyPriceVectorCriteriesSum );
   this.PricePrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MyPriceCriteriesVectorAcerA,this.MyPriceVectorCriteriesSum );
   this.PricePrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MyPriceCriteriesVectorLenovoG,this.MyPriceVectorCriteriesSum );
   this.PricePrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MyPriceCriteriesVectorAcerS,this.MyPriceVectorCriteriesSum );

   this.PricePrioritVectorCriteriesSum = this.CriteiesSum(this.PricePriorityCriteriesVectorLenovoI,this.PricePrioritCriteriesVectorAcerA,this.PricePrioritCriteriesVectorLenovoG,this.PricePrioritCriteriesVectorAcerS);
  
  this.PricePriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.PricePriorityCriteriesVectorLenovoI, this.LenovoICriteriesPriceSum);
  this.PricePrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.PricePrioritCriteriesVectorAcerA, this.AcerACriteriesPriceSum);
  this.PricePrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.PricePrioritCriteriesVectorLenovoG, this.LenovoGCriteriesPriceSum);
  this.PricePrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.PricePrioritCriteriesVectorAcerS, this.AcerSCriteriesPriceSum);
  this.PricePrioritLyambdCriteriesSum = this.CriteiesSum(this.PricePriorityCriteriesLyambdaLenovoI, this.PricePrioritCriteriesLyambdAcerA,this.PricePrioritCriteriesLyambdLenovoG,this.PricePrioritCriteriesLyambdAcerS);  
}

Size() {
  this.MySizeCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_Size, this.LenovoItoLenovoG_Size, this.LenovoItoAcerS_Size);
   this.MySizeCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_Size, this.AcerAtoLenovoG_Size, this.AcerAtoAcerS_Size);
   this.MySizeCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_Size, this.LenovoGtoAcerA_Size, this.LenovoGtoAcerS_Size);
   this.MySizeCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_Size, this.AcerStoAcerA_Size, this.AcerStoLenovoG_Size);

   this.MySizeVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MySizeCriteriesVectorLenovoI,this.MySizeCriteriesVectorAcerA,this.MySizeCriteriesVectorLenovoG,this.MySizeCriteriesVectorAcerS );

   this.LenovoICriteriesSizeSum = this.CriteiesSum(1,this.AcerAtoLenovoI_Size, this.LenovoGtoLenovoI_Size, this.AcerStoLenovoI_Size);
   this.AcerACriteriesSizeSum = this.CriteiesSum(1, this.LenovoItoAcerA_Size, this.LenovoGtoAcerA_Size ,this.AcerStoAcerA_Size);
   this.LenovoGCriteriesSizeSum = this.CriteiesSum(1, this.LenovoItoLenovoG_Size, this.AcerAtoLenovoG_Size, this.AcerStoLenovoG_Size);
   this.AcerSCriteriesSizeSum = this.CriteiesSum(1,this.LenovoItoAcerS_Size, this.AcerAtoAcerS_Size, this.LenovoGtoAcerS_Size );

   this.SizePriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MySizeCriteriesVectorLenovoI,this.MySizeVectorCriteriesSum );
   this.SizePrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MySizeCriteriesVectorAcerA,this.MySizeVectorCriteriesSum );
   this.SizePrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MySizeCriteriesVectorLenovoG,this.MySizeVectorCriteriesSum );
   this.SizePrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MySizeCriteriesVectorAcerS,this.MySizeVectorCriteriesSum );

   this.SizePrioritVectorCriteriesSum = this.CriteiesSum(this.SizePriorityCriteriesVectorLenovoI,this.SizePrioritCriteriesVectorAcerA,this.SizePrioritCriteriesVectorLenovoG,this.SizePrioritCriteriesVectorAcerS);
  
  this.SizePriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.SizePriorityCriteriesVectorLenovoI, this.LenovoICriteriesSizeSum);
  this.SizePrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.SizePrioritCriteriesVectorAcerA, this.AcerACriteriesSizeSum);
  this.SizePrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.SizePrioritCriteriesVectorLenovoG, this.LenovoGCriteriesSizeSum);
  this.SizePrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.SizePrioritCriteriesVectorAcerS, this.AcerSCriteriesSizeSum);
  this.SizePrioritLyambdCriteriesSum = this.CriteiesSum(this.SizePriorityCriteriesLyambdaLenovoI, this.SizePrioritCriteriesLyambdAcerA,this.SizePrioritCriteriesLyambdLenovoG,this.SizePrioritCriteriesLyambdAcerS);
}

Case() {
  this.MyCaseCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_Case, this.LenovoItoLenovoG_Case, this.LenovoItoAcerS_Case);
  this.MyCaseCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_Case, this.AcerAtoLenovoG_Case, this.AcerAtoAcerS_Case);
  this.MyCaseCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_Case, this.LenovoGtoAcerA_Case, this.LenovoGtoAcerS_Case);
  this.MyCaseCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_Case, this.AcerStoAcerA_Case, this.AcerStoLenovoG_Case);

  this.MyCaseVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MyCaseCriteriesVectorLenovoI,this.MyCaseCriteriesVectorAcerA,this.MyCaseCriteriesVectorLenovoG,this.MyCaseCriteriesVectorAcerS );

  this.LenovoICriteriesCaseSum = this.CriteiesSum(1,this.AcerAtoLenovoI_Case, this.LenovoGtoLenovoI_Case, this.AcerStoLenovoI_Case);
  this.AcerACriteriesCaseSum = this.CriteiesSum(1, this.LenovoItoAcerA_Case, this.LenovoGtoAcerA_Case ,this.AcerStoAcerA_Case);
  this.LenovoGCriteriesCaseSum = this.CriteiesSum(1, this.LenovoItoLenovoG_Case, this.AcerAtoLenovoG_Case, this.AcerStoLenovoG_Case);
  this.AcerSCriteriesCaseSum = this.CriteiesSum(1,this.LenovoItoAcerS_Case, this.AcerAtoAcerS_Case, this.LenovoGtoAcerS_Case );

  this.CasePriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MyCaseCriteriesVectorLenovoI,this.MyCaseVectorCriteriesSum );
  this.CasePrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MyCaseCriteriesVectorAcerA,this.MyCaseVectorCriteriesSum );
  this.CasePrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MyCaseCriteriesVectorLenovoG,this.MyCaseVectorCriteriesSum );
  this.CasePrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MyCaseCriteriesVectorAcerS,this.MyCaseVectorCriteriesSum );

  this.CasePrioritVectorCriteriesSum = this.CriteiesSum(this.CasePriorityCriteriesVectorLenovoI,this.CasePrioritCriteriesVectorAcerA,this.CasePrioritCriteriesVectorLenovoG,this.CasePrioritCriteriesVectorAcerS);
 
 this.CasePriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.CasePriorityCriteriesVectorLenovoI, this.LenovoICriteriesCaseSum);
 this.CasePrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.CasePrioritCriteriesVectorAcerA, this.AcerACriteriesCaseSum);
 this.CasePrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.CasePrioritCriteriesVectorLenovoG, this.LenovoGCriteriesCaseSum);
 this.CasePrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.CasePrioritCriteriesVectorAcerS, this.AcerSCriteriesCaseSum);
 this.CasePrioritLyambdCriteriesSum = this.CriteiesSum(this.CasePriorityCriteriesLyambdaLenovoI, this.CasePrioritCriteriesLyambdAcerA,this.CasePrioritCriteriesLyambdLenovoG,this.CasePrioritCriteriesLyambdAcerS);
}

CPU() {
  this.MyCPUCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_CPU, this.LenovoItoLenovoG_CPU, this.LenovoItoAcerS_CPU);
  this.MyCPUCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_CPU, this.AcerAtoLenovoG_CPU, this.AcerAtoAcerS_CPU);
  this.MyCPUCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_CPU, this.LenovoGtoAcerA_CPU, this.LenovoGtoAcerS_CPU);
  this.MyCPUCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_CPU, this.AcerStoAcerA_CPU, this.AcerStoLenovoG_CPU);

  this.MyCPUVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MyCPUCriteriesVectorLenovoI,this.MyCPUCriteriesVectorAcerA,this.MyCPUCriteriesVectorLenovoG,this.MyCPUCriteriesVectorAcerS );

  this.LenovoICriteriesCPUSum = this.CriteiesSum(1,this.AcerAtoLenovoI_CPU, this.LenovoGtoLenovoI_CPU, this.AcerStoLenovoI_CPU);
  this.AcerACriteriesCPUSum = this.CriteiesSum(1, this.LenovoItoAcerA_CPU, this.LenovoGtoAcerA_CPU ,this.AcerStoAcerA_CPU);
  this.LenovoGCriteriesCPUSum = this.CriteiesSum(1, this.LenovoItoLenovoG_CPU, this.AcerAtoLenovoG_CPU, this.AcerStoLenovoG_CPU);
  this.AcerSCriteriesCPUSum = this.CriteiesSum(1,this.LenovoItoAcerS_CPU, this.AcerAtoAcerS_CPU, this.LenovoGtoAcerS_CPU );

  this.CPUPriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MyCPUCriteriesVectorLenovoI,this.MyCPUVectorCriteriesSum );
  this.CPUPrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MyCPUCriteriesVectorAcerA,this.MyCPUVectorCriteriesSum );
  this.CPUPrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MyCPUCriteriesVectorLenovoG,this.MyCPUVectorCriteriesSum );
  this.CPUPrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MyCPUCriteriesVectorAcerS,this.MyCPUVectorCriteriesSum );

  this.CPUPrioritVectorCriteriesSum = this.CriteiesSum(this.CPUPriorityCriteriesVectorLenovoI,this.CPUPrioritCriteriesVectorAcerA,this.CPUPrioritCriteriesVectorLenovoG,this.CPUPrioritCriteriesVectorAcerS);
 
 this.CPUPriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.CPUPriorityCriteriesVectorLenovoI, this.LenovoICriteriesCPUSum);
 this.CPUPrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.CPUPrioritCriteriesVectorAcerA, this.AcerACriteriesCPUSum);
 this.CPUPrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.CPUPrioritCriteriesVectorLenovoG, this.LenovoGCriteriesCPUSum);
 this.CPUPrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.CPUPrioritCriteriesVectorAcerS, this.AcerSCriteriesCPUSum);
 this.CPUPrioritLyambdCriteriesSum = this.CriteiesSum(this.CPUPriorityCriteriesLyambdaLenovoI, this.CPUPrioritCriteriesLyambdAcerA,this.CPUPrioritCriteriesLyambdLenovoG,this.CPUPrioritCriteriesLyambdAcerS);
}

SSD() {
  this.MySSDCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_SSD, this.LenovoItoLenovoG_SSD, this.LenovoItoAcerS_SSD);
this.MySSDCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_SSD, this.AcerAtoLenovoG_SSD, this.AcerAtoAcerS_SSD);
this.MySSDCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_SSD, this.LenovoGtoAcerA_SSD, this.LenovoGtoAcerS_SSD);
this.MySSDCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_SSD, this.AcerStoAcerA_SSD, this.AcerStoLenovoG_SSD);

this.MySSDVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MySSDCriteriesVectorLenovoI,this.MySSDCriteriesVectorAcerA,this.MySSDCriteriesVectorLenovoG,this.MySSDCriteriesVectorAcerS );

this.LenovoICriteriesSSDSum = this.CriteiesSum(1,this.AcerAtoLenovoI_SSD, this.LenovoGtoLenovoI_SSD, this.AcerStoLenovoI_SSD);
this.AcerACriteriesSSDSum = this.CriteiesSum(1, this.LenovoItoAcerA_SSD, this.LenovoGtoAcerA_SSD ,this.AcerStoAcerA_SSD);
this.LenovoGCriteriesSSDSum = this.CriteiesSum(1, this.LenovoItoLenovoG_SSD, this.AcerAtoLenovoG_SSD, this.AcerStoLenovoG_SSD);
this.AcerSCriteriesSSDSum = this.CriteiesSum(1,this.LenovoItoAcerS_SSD, this.AcerAtoAcerS_SSD, this.LenovoGtoAcerS_SSD );

this.SSDPriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MySSDCriteriesVectorLenovoI,this.MySSDVectorCriteriesSum );
this.SSDPrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MySSDCriteriesVectorAcerA,this.MySSDVectorCriteriesSum );
this.SSDPrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MySSDCriteriesVectorLenovoG,this.MySSDVectorCriteriesSum );
this.SSDPrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MySSDCriteriesVectorAcerS,this.MySSDVectorCriteriesSum );

this.SSDPrioritVectorCriteriesSum = this.CriteiesSum(this.SSDPriorityCriteriesVectorLenovoI,this.SSDPrioritCriteriesVectorAcerA,this.SSDPrioritCriteriesVectorLenovoG,this.SSDPrioritCriteriesVectorAcerS);

this.SSDPriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.SSDPriorityCriteriesVectorLenovoI, this.LenovoICriteriesSSDSum);
this.SSDPrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.SSDPrioritCriteriesVectorAcerA, this.AcerACriteriesSSDSum);
this.SSDPrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.SSDPrioritCriteriesVectorLenovoG, this.LenovoGCriteriesSSDSum);
this.SSDPrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.SSDPrioritCriteriesVectorAcerS, this.AcerSCriteriesSSDSum);
this.SSDPrioritLyambdCriteriesSum = this.CriteiesSum(this.SSDPriorityCriteriesLyambdaLenovoI, this.SSDPrioritCriteriesLyambdAcerA,this.SSDPrioritCriteriesLyambdLenovoG,this.SSDPrioritCriteriesLyambdAcerS);
}

GPU() {
  this.MyGPUCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_GPU, this.LenovoItoLenovoG_GPU, this.LenovoItoAcerS_GPU);
this.MyGPUCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_GPU, this.AcerAtoLenovoG_GPU, this.AcerAtoAcerS_GPU);
this.MyGPUCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_GPU, this.LenovoGtoAcerA_GPU, this.LenovoGtoAcerS_GPU);
this.MyGPUCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_GPU, this.AcerStoAcerA_GPU, this.AcerStoLenovoG_GPU);

this.MyGPUVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MyGPUCriteriesVectorLenovoI,this.MyGPUCriteriesVectorAcerA,this.MyGPUCriteriesVectorLenovoG,this.MyGPUCriteriesVectorAcerS );

this.LenovoICriteriesGPUSum = this.CriteiesSum(1,this.AcerAtoLenovoI_GPU, this.LenovoGtoLenovoI_GPU, this.AcerStoLenovoI_GPU);
this.AcerACriteriesGPUSum = this.CriteiesSum(1, this.LenovoItoAcerA_GPU, this.LenovoGtoAcerA_GPU ,this.AcerStoAcerA_GPU);
this.LenovoGCriteriesGPUSum = this.CriteiesSum(1, this.LenovoItoLenovoG_GPU, this.AcerAtoLenovoG_GPU, this.AcerStoLenovoG_GPU);
this.AcerSCriteriesGPUSum = this.CriteiesSum(1,this.LenovoItoAcerS_GPU, this.AcerAtoAcerS_GPU, this.LenovoGtoAcerS_GPU );

this.GPUPriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MyGPUCriteriesVectorLenovoI,this.MyGPUVectorCriteriesSum );
this.GPUPrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MyGPUCriteriesVectorAcerA,this.MyGPUVectorCriteriesSum );
this.GPUPrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MyGPUCriteriesVectorLenovoG,this.MyGPUVectorCriteriesSum );
this.GPUPrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MyGPUCriteriesVectorAcerS,this.MyGPUVectorCriteriesSum );

this.GPUPrioritVectorCriteriesSum = this.CriteiesSum(this.GPUPriorityCriteriesVectorLenovoI,this.GPUPrioritCriteriesVectorAcerA,this.GPUPrioritCriteriesVectorLenovoG,this.GPUPrioritCriteriesVectorAcerS);

this.GPUPriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.GPUPriorityCriteriesVectorLenovoI, this.LenovoICriteriesGPUSum);
this.GPUPrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.GPUPrioritCriteriesVectorAcerA, this.AcerACriteriesGPUSum);
this.GPUPrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.GPUPrioritCriteriesVectorLenovoG, this.LenovoGCriteriesGPUSum);
this.GPUPrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.GPUPrioritCriteriesVectorAcerS, this.AcerSCriteriesGPUSum);
this.GPUPrioritLyambdCriteriesSum = this.CriteiesSum(this.GPUPriorityCriteriesLyambdaLenovoI, this.GPUPrioritCriteriesLyambdAcerA,this.GPUPrioritCriteriesLyambdLenovoG,this.GPUPrioritCriteriesLyambdAcerS);
}

Battery() {
  this.MyBatteryCriteriesVectorLenovoI = this.MyVectorForCriteries(1, this.LenovoItoAcerA_Battery, this.LenovoItoLenovoG_Battery, this.LenovoItoAcerS_Battery);
this.MyBatteryCriteriesVectorAcerA = this.MyVectorForCriteries(1,this.AcerAtoLenovoI_Battery, this.AcerAtoLenovoG_Battery, this.AcerAtoAcerS_Battery);
this.MyBatteryCriteriesVectorLenovoG = this.MyVectorForCriteries(1, this.LenovoGtoLenovoI_Battery, this.LenovoGtoAcerA_Battery, this.LenovoGtoAcerS_Battery);
this.MyBatteryCriteriesVectorAcerS = this.MyVectorForCriteries(1,this.AcerStoLenovoI_Battery, this.AcerStoAcerA_Battery, this.AcerStoLenovoG_Battery);

this.MyBatteryVectorCriteriesSum = this.MyVectorForCriteriesSum(this.MyBatteryCriteriesVectorLenovoI,this.MyBatteryCriteriesVectorAcerA,this.MyBatteryCriteriesVectorLenovoG,this.MyBatteryCriteriesVectorAcerS );

this.LenovoICriteriesBatterySum = this.CriteiesSum(1,this.AcerAtoLenovoI_Battery, this.LenovoGtoLenovoI_Battery, this.AcerStoLenovoI_Battery);
this.AcerACriteriesBatterySum = this.CriteiesSum(1, this.LenovoItoAcerA_Battery, this.LenovoGtoAcerA_Battery ,this.AcerStoAcerA_Battery);
this.LenovoGCriteriesBatterySum = this.CriteiesSum(1, this.LenovoItoLenovoG_Battery, this.AcerAtoLenovoG_Battery, this.AcerStoLenovoG_Battery);
this.AcerSCriteriesBatterySum = this.CriteiesSum(1,this.LenovoItoAcerS_Battery, this.AcerAtoAcerS_Battery, this.LenovoGtoAcerS_Battery );

this.BatteryPriorityCriteriesVectorLenovoI = this.PriorityVectorCriteries(this.MyBatteryCriteriesVectorLenovoI,this.MyBatteryVectorCriteriesSum );
this.BatteryPrioritCriteriesVectorAcerA = this.PriorityVectorCriteries(this.MyBatteryCriteriesVectorAcerA,this.MyBatteryVectorCriteriesSum );
this.BatteryPrioritCriteriesVectorLenovoG = this.PriorityVectorCriteries(this.MyBatteryCriteriesVectorLenovoG,this.MyBatteryVectorCriteriesSum );
this.BatteryPrioritCriteriesVectorAcerS = this.PriorityVectorCriteries(this.MyBatteryCriteriesVectorAcerS,this.MyBatteryVectorCriteriesSum );

this.BatteryPrioritVectorCriteriesSum = this.CriteiesSum(this.BatteryPriorityCriteriesVectorLenovoI,this.BatteryPrioritCriteriesVectorAcerA,this.BatteryPrioritCriteriesVectorLenovoG,this.BatteryPrioritCriteriesVectorAcerS);

this.BatteryPriorityCriteriesLyambdaLenovoI = this.LymbadaCriteries(this.BatteryPriorityCriteriesVectorLenovoI, this.LenovoICriteriesBatterySum);
this.BatteryPrioritCriteriesLyambdAcerA = this.LymbadaCriteries(this.BatteryPrioritCriteriesVectorAcerA, this.AcerACriteriesBatterySum);
this.BatteryPrioritCriteriesLyambdLenovoG = this.LymbadaCriteries(this.BatteryPrioritCriteriesVectorLenovoG, this.LenovoGCriteriesBatterySum);
this.BatteryPrioritCriteriesLyambdAcerS = this.LymbadaCriteries(this.BatteryPrioritCriteriesVectorAcerS, this.AcerSCriteriesBatterySum);
this.BatteryPrioritLyambdCriteriesSum = this.CriteiesSum(this.BatteryPriorityCriteriesLyambdaLenovoI, this.BatteryPrioritCriteriesLyambdAcerA,this.BatteryPrioritCriteriesLyambdLenovoG,this.BatteryPrioritCriteriesLyambdAcerS);
}

Calculate() {
  this.myPriceVector = this.MyVector(1,this.priceSize,this.priceCase, this.priceCPU, this.priceSSD ,this.priceGPU , this.priceBattery);
  this.mySizeVector = this.MyVector(1,this.sizePrice,this.sizeCase, this.sizeCPU, this.sizeSSD ,this.sizeGPU , this.sizeBattery);
  this.myCaseVector = this.MyVector(1,this.casePrice,this.caseSize, this.caseCPU, this.caseSSD ,this.caseGPU , this.caseBattery);
  this.myCPUVector = this.MyVector(1,this.cpuPrice,this.cpuSize, this.cpuCase, this.cpuSSD ,this.cpuGPU , this.cpuBattery);
  this.mySSDVector = this.MyVector(1,this.ssdPrice,this.ssdSize, this.ssdCase, this.ssdCPU ,this.ssdGPU , this.ssdBattery);
  this.myGPUVector = this.MyVector(1,this.gpuPrice,this.gpuSize, this.gpuCase, this.gpuCPU ,this.gpuSSD , this.gpuBattery);
  this.myBatteryVector = this.MyVector(1,this.batteryPrice,this.batterySize, this.batteryCase, this.batteryCPU ,this.batterySSD , this.batteryGPU );

  this.PriorityVectorPrice = this.PriorityVector(this.myPriceVector, this.MyVectorSum);
  this.PriprityVectorSize = this.PriorityVector(this.mySizeVector, this.MyVectorSum);
  this.PriprityVectorCase = this.PriorityVector( this.myCaseVector,this.MyVectorSum);
  this.PriprityVectorCPU = this.PriorityVector(this.myCPUVector,this.MyVectorSum);
  this.PriprityVectorSSD = this.PriorityVector(this.mySSDVector,this.MyVectorSum);
  this.PriprityVectorGPU = this.PriorityVector( this.myGPUVector,this.MyVectorSum);
  this.PriprityVectorBattery = this.PriorityVector(this.myBatteryVector,this.MyVectorSum);

  this.MyVectorSum = this.MyVectorSumm(this.myPriceVector,this.mySizeVector,this.myCaseVector,this.myCPUVector,this.mySSDVector,this.myGPUVector,this.myBatteryVector);
  this.PriorityVectorSumm = this.MyVectorSumm(this.PriorityVectorPrice, this.PriprityVectorSize,this.PriprityVectorCase,
                      this.PriprityVectorCPU,this.PriprityVectorSSD,this.PriprityVectorGPU,this.PriprityVectorBattery);
  
  this.priceSum = this.Sum(1, this.sizePrice, this.casePrice, this.cpuPrice, this.ssdPrice, this.gpuPrice, this.batteryPrice );
  this.sizeSum = this.Sum(1,this.priceSize, this.caseSize, this.ssdSize, this.cpuSize, this.gpuSize, this.batterySize );
  this.caseSum = this.Sum(1, this.priceCase, this.sizeCase, this.cpuCase, this.ssdCase, this.batteryCase, this.gpuCase);
  this.cpuSum = this.Sum(1, this.priceCPU, this.sizeCPU, this.caseCPU, this.ssdCPU, this.gpuCPU, this.batteryCPU );
  this.ssdSum = this.Sum(1,this.priceSSD, this.sizeSSD, this.caseSSD, this.cpuSSD, this.gpuSSD, this.batterySSD);
  this.gpuSum = this.Sum(1, this.priceGPU, this.sizeGPU, this.caseGPU, this.ssdGPU, this.cpuGPU, this.batteryGPU);
  this.batterySum = this.Sum(1, this.priceBattery, this.sizeBattery, this.caseBattery, this.cpuBattery, this.ssdBattery, this.gpuBattery);

  this.priceLyambda = this.Lyambda(this.PriorityVectorPrice, this.priceSum);
  this.sizeLyambda = this.Lyambda(this.PriprityVectorSize, this.sizeSum);
  this.caseLyambda = this.Lyambda(this.PriprityVectorCase, this.caseSum);
  this.cpuLyambda = this.Lyambda( this.PriprityVectorCPU,this.cpuSum);
  this.gpuLyambda = this.Lyambda(this.PriprityVectorGPU, this.gpuSum );;
  this.batteryLyambda = this.Lyambda(this.PriprityVectorBattery,this.batterySum);
  this.ssdLyambda = this.Lyambda(this.PriprityVectorSSD,  this.ssdSum );

  this.LyambdaSum = this.Sum(this.priceLyambda, this.sizeLyambda,this.caseLyambda,this.cpuLyambda,this.gpuLyambda,this.batteryLyambda,this.ssdLyambda);

}

CalculateCriteries() {
  this.Price();
  this.Size();
  this.Case();
  this.CPU();
  this.SSD();
  this.GPU();
  this.Battery();

  this.isCalculate = true;

  
}
}

