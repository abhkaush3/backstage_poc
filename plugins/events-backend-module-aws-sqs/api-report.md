## API Report File for "@backstage/plugin-events-backend-module-aws-sqs"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Config } from '@backstage/config';
import { EventBroker } from '@backstage/plugin-events-node';
import { EventPublisher } from '@backstage/plugin-events-node';
import { Logger } from 'winston';
import { PluginTaskScheduler } from '@backstage/backend-tasks';

// @public
export class AwsSqsConsumingEventPublisher implements EventPublisher {
  // (undocumented)
  static fromConfig(env: {
    config: Config;
    logger: Logger;
    scheduler: PluginTaskScheduler;
  }): AwsSqsConsumingEventPublisher[];
  // (undocumented)
  setEventBroker(eventBroker: EventBroker): Promise<void>;
}
```
