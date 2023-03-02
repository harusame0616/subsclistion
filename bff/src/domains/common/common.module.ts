import { Module } from '@nestjs/common';
import { DateScalar } from './presentations/custom-scalars/DateScalar';

@Module({
  providers: [DateScalar],
})
export class CommonModule {}
