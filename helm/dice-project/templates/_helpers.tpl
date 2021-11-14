{{- define "application-backend.labels" -}}
tier: backend
app: diceK8s-project
{{- end -}}

{{- define "db.labels" -}}
app: mongo
{{- end -}}

{{- define "application-frontend.annotation" -}}
class: frontend-k8s
{{- end -}}

{{- define "application-frontend.labels" -}}
tier: frontend
app: diceK8s-project
{{- end -}}
