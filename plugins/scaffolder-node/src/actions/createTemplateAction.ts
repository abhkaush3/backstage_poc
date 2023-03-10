/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { JsonObject } from '@backstage/types';
import { TemplateAction } from './types';

/**
 * This function is used to create new template actions to get type safety.
 *
 * @public
 */
export const createTemplateAction = <TInput extends JsonObject>(
  templateAction: TemplateAction<TInput>,
): TemplateAction<TInput> => {
  // TODO(blam): Can add some more validation here to validate the action later on
  return templateAction;
};
