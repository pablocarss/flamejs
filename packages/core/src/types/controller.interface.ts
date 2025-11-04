import type { FlameAction } from "./action.interface";
import type { FlameBaseContext } from "./context.interface";
import type { FlamePlugin } from "./plugin.interface";
import type { HTTPMethod, FlameActionHandler } from "./action.interface";

/**
 * Constraint que valida estrutura de action sem achatar tipos específicos
 */
export type FlameControllerBaseAction = {
  name?: string;
  type: "query" | "mutation";
  path: string;
  method: HTTPMethod;
  description?: string;
  body?: any;
  query?: any;
  use?: readonly any[];
  handler: FlameActionHandler<any, any>;
  $Infer: any; // Esta é a chave - preservamos o tipo específico aqui
};

/**
 * Constraint inteligente que valida sem perder tipos
 */
type ValidateActions<T> = {
  [K in keyof T]: T[K] extends FlameControllerBaseAction 
    ? T[K]  // ✅ Mantém o tipo específico se é válido
    : never // ❌ Erro se não é uma action válida
};

export type FlameControllerConfig<
  TControllerActions extends Record<string, FlameControllerBaseAction> // 🔄 Nova constraint
> = {
  name: string;
  path: string;
  description?: string;
  actions: ValidateActions<TControllerActions>; // 🔄 Validação com preservação de tipos
}





