export class VehicleRcogDTO {
  sendTime: string;
  channelID: number;
  dataType: string;
  dateTime: string;
  eventDescription: string;
  eventType: string;
  ipAddress: string;
  portNo: number;
  recvTime: string;
  vehicleRcogResult: {
    target: {
      rect: {
        height: number;
        width: number;
        x: number;
        y: number;
      };
      vehicle: {
        dangmark: { value: string };
        envprosign: { value: string };
        isMainVehicle: string;
        pendant: { value: string };
        pilotSafebelt: { value: string };
        pilotSunvisor: { value: string };
        plateColor: { value: string };
        plateNo: { confidence: number; value: string };
        plateRect: { height: number; width: number; x: number; y: number };
        plateType: { value: string };
        uphone: { value: string };
        vehicleColor: { value: string };
        vehicleHead: { value: string };
        vehicleLogo: { value: string };
        vehicleModel: { value: string };
        vehicleSubLogo: { value: string };
        vehicleType: { value: string };
        vicePilotSafebelt: { value: string };
        vicePilotSunvisor: { value: string };
      };
    }[];

    targetAttrs: {
      areaCode: string;
      cameraAddress: string;
      cameraIndexCode: string;
      cameraName: string;
      cascade: string;
      crossingId: number;
      crossingIndexCode: string;
      deviceIndexCode: string;
      deviceName: string;
      deviceType: string;
      directionIndex: string;
      imageServerCode: string;
      laneNo: number;
      multiVehicle: number;
      passID: string;
      passTime: string;
      recognitionSign: number;
      regionIndexCode: string;
      vehicleColorDepth: string;
      vehicleLen: number;
      vehicleSpeed: number;
    };
    targetPicUrl: string;
    taskID: string;
    vehiclePositionControl: number;
  }[];
}
