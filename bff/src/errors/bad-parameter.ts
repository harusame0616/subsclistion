import { BadRequestException } from '@nestjs/common';

export class BadParameterError extends BadRequestException {}
