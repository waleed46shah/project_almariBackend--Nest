import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';

@Injectable()
export class DBSequenceService {
  constructor(private readonly dataSource: DataSource) {}
  async getTableSequence(sequenceName) {
    const sequence = await this.dataSource.manager.query(
      `select nextval('${sequenceName}') as id`,
    );
    return sequence[0].id;
  }
}
