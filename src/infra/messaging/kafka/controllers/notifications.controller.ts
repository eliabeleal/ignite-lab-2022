import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { VehicleRcogDTO } from '../dtos/vehicle-rcog';

@Controller()
export class NotificationsController {
  @EventPattern('BAYONET_VEHICLEPASS_JSON_TOPIC')
  async handleVehiclePassed(@Payload() { ipAddress }: VehicleRcogDTO) {
    //CRIAR UM APP SERVICE (USE CASE) PARA TRATAR OS EVENTOS
    console.log(ipAddress);
  }
}
