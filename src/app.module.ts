import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'hh-pgsql-public.ebi.ac.uk',
      port: 5432,
      username: 'reader',
      password: 'NWDMCE5xdipIjRrp',
      database: 'pfmegrnargs',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true,
    }),
  ],
})
export class AppModule {}
